'use strict';
// eslint-disable-next-line import/no-unresolved
import { name, version } from '/package.json';

import fs from 'fs';
import path from 'path';
import util from 'util';
import https from 'https';

const url = process.env.RELEASE_SLACK_WEBHOOK_URL;
const serviceCode = name;
const releaseVersion = process.env.GITHUB_REF_NAME || version;
const repoBaseDir = '.';

const prettifyServiceCode = (code) => {
	if (code.length === 3) return code.toUpperCase();

	return code
		.toLowerCase()
		.split('-')
		.map((part) => `${part[0].toUpperCase()}${part.substr(1)}`)
		.join(' ');
};

const releaseNotes = fs
	.readFileSync(path.resolve(repoBaseDir, './RELEASE_NOTES.md'), 'utf8')
	.replace(/### ([a-z]+)/gi, '*$1*')
	.replace(/\*{2}/g, '*');

const header = `${prettifyServiceCode(serviceCode)} v${releaseVersion} released! :tada:`;

(async () => {
	const asyncRequest = util.promisify((requestData, cb) => {
		const { url: requestUrl, body, ...rest } = requestData;

		const req = https.request(requestUrl, rest, (res) => {
			if (res.statusCode !== 200)
				throw new Error(`Failed to send request to ${requestUrl}: ${res.statusCode}`);

			res.on('end', cb);
		});

		req.on('error', cb);

		req.write(JSON.stringify(body));

		req.end();
	});

	try {
		await asyncRequest({
			method: 'post',
			url,
			headers: {
				'content-type': 'application/json'
			},
			body: {
				blocks: [
					{
						type: 'header',
						text: {
							type: 'plain_text',
							text: header,
							emoji: true
						}
					},
					{
						type: 'divider'
					},
					{
						type: 'section',
						text: {
							type: 'mrkdwn',
							text: `${releaseNotes}`
						}
					}
				]
			}
		});
	} catch (e) {
		console.error(e.stack);
	}
})();

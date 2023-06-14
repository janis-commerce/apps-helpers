awk -v ver="1.4.0" '
	/^#+ \[/ { if (p) { exit }; if ($2 == "["ver"]") { p=1; next} } p
	' CHANGELOG.md | sed '${/^[[:space:]]*$/d;}' > RELEASE_NOTES.md

node ./scripts/send-slack-message.js
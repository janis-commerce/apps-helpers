# Apps helpers

![Build Status](https://github.com/janis-commerce/apps-helpers/workflows/Build%20Status/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/janis-commerce/apps-helpers/badge.svg?branch=master)](https://coveralls.io/github/janis-commerce/apps-helpers?branch=master)
[![npm version](https://badge.fury.io/js/%40janiscommerce%2Fapps-helpers.svg)](https://www.npmjs.com/package/@janiscommerce/apps-helpers)

This package provides utilities for use in Janis apps.

## 📦 Installation
```sh
npm install @janiscommerce/apps-helpers
```

## Utils
## Members

<dl>
<dt><a href="#isEqualObj">isEqualObj</a> ⇒ <code>boolean</code></dt>
<dd><p>check if two objects are exactly the same</p></dd>
<dt><a href="#isValidIsoString">isValidIsoString</a> ⇒ <code>boolean</code></dt>
<dd><p>validate if a ISO string is valid or not</p></dd>
</dl>

## Functions

<dl>
<dt><a href="#debounce">debounce(fn, [wait])</a> ⇒</dt>
<dd><p>The function debounce is a function that takes two arguments, a function and a number. The function
debounce returns a function that will execute the function passed to it after the number of
milliseconds passed to it</p></dd>
<dt><a href="#formatIsoToDate">formatIsoToDate(params)</a> ⇒ <code>string</code></dt>
<dd><p>it is a function that receives an ISO string and formats it</p></dd>
<dt><a href="#generateRandomId">generateRandomId()</a> ⇒ <code>string</code></dt>
<dd><p>returns a random combination of letters and/or numbers</p></dd>
<dt><a href="#getHeaders">getHeaders([params], [deviceDataHeaders], [customHeaders])</a> ⇒ <code>object</code></dt>
<dd><p>get correct headers for janis api</p></dd>
<dt><a href="#isArray">isArray(arr)</a> ⇒ <code>bool</code></dt>
<dd><p>return true or false if arg is a valid array</p></dd>
<dt><a href="#isBoolean">isBoolean(fn)</a> ⇒ <code>bool</code></dt>
<dd><p>return true or false if arg is a valid boolean</p></dd>
<dt><a href="#isFunction">isFunction(fn)</a> ⇒ <code>bool</code></dt>
<dd><p>return true or false if arg is a valid function</p></dd>
<dt><a href="#isJSON">isJSON(param)</a> ⇒ <code>bool</code></dt>
<dd><p>return true or false if arg is a valid JSON</p></dd>
<dt><a href="#isObject">isObject(obj)</a> ⇒ <code>bool</code></dt>
<dd><p>return true or false if arg is a valid object</p></dd>
<dt><a href="#isRequired">isRequired(param)</a> ⇒ <code>Error</code></dt>
<dd><p>throw error with required param</p></dd>
<dt><a href="#isString">isString(str)</a> ⇒ <code>bool</code></dt>
<dd><p>If the type of the argument is a string, return true, otherwise return false.</p></dd>
<dt><a href="#isValidFormatPosition">isValidFormatPosition(position)</a> ⇒ <code>boolean</code></dt>
<dd><p>If the position has the valid format required it will return true, otherwise return false.
For a position to be valid, you need a positionKey: string or a positionId: string</p></dd>
<dt><a href="#isValidUrl">isValidUrl(str)</a> ⇒ <code>boolean</code></dt>
<dd><p>return true if the argument is a valid url</p></dd>
<dt><a href="#promiseWrapper">promiseWrapper(fn)</a> ⇒ <code>array.&lt;data, error&gt;</code></dt>
<dd><p>wrapper to execute promise and return tuple with data and error</p></dd>
</dl>

<a name="isEqualObj"></a>

## isEqualObj ⇒ <code>boolean</code>
<p>check if two objects are exactly the same</p>

**Kind**: global variable  
**Returns**: <code>boolean</code> - <p>Returns <code>true</code> if the objects are equivalent, else <code>false</code>.</p>  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> | <p>The object to compare.</p> |
| other | <code>Object</code> | <p>The other object to compare.</p> |

**Example**  
```js
// eslint-disable-next-line no-restricted-syntax
import {isEqualObj} from '@janiscommerce/apps-helpers'
isEqualObj({items: [{id:123}]},{items: [{id: 123, ean: 456}]}) // false
```
<a name="isValidIsoString"></a>

## isValidIsoString ⇒ <code>boolean</code>
<p>validate if a ISO string is valid or not</p>

**Kind**: global variable  
**Returns**: <code>boolean</code> - <p>returns true if the date passed as an argument is valid</p>  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | <p>date in ISO format</p> |

<a name="debounce"></a>

## debounce(fn, [wait]) ⇒
<p>The function debounce is a function that takes two arguments, a function and a number. The function
debounce returns a function that will execute the function passed to it after the number of
milliseconds passed to it</p>

**Kind**: global function  
**Returns**: <p>A function that will be called after the specified wait time.</p>  

| Param | Default | Description |
| --- | --- | --- |
| fn |  | <p>The function to be debounced.</p> |
| [wait] | <code>300</code> | <p>The number of milliseconds to wait before executing the function.</p> |

<a name="formatIsoToDate"></a>

## formatIsoToDate(params) ⇒ <code>string</code>
<p>it is a function that receives an ISO string and formats it</p>

**Kind**: global function  
**Returns**: <code>string</code> - <ul>
<li>returns an formated date. Example: 18/05/23</li>
</ul>  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | <p>param</p> |
| params.date | <code>Date</code> | <p>iso format. Example: '2022-02-03T17:29:28.637Z'</p> |
| params.locale | <code>String</code> | <p>iso format. Example: 'es-Ar'</p> |
| params.customFormat | <code>String</code> | <p>iso format. Example: 'pp'</p> |

<a name="generateRandomId"></a>

## generateRandomId() ⇒ <code>string</code>
<p>returns a random combination of letters and/or numbers</p>

**Kind**: global function  
**Example**  
```js
import {generateRandomId} from '@janiscommerce/apps-helpers'
generateRandomId() // '6kj4nk9c5so'
```
<a name="getHeaders"></a>

## getHeaders([params], [deviceDataHeaders], [customHeaders]) ⇒ <code>object</code>
<p>get correct headers for janis api</p>

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [params] | <code>object</code> | <code>{}</code> | <p>object with params</p> |
| [deviceDataHeaders] | <code>object</code> | <code>{}</code> | <p>headers with the device info</p> |
| [customHeaders] | <code>object</code> | <code>{}</code> | <p>extra custom headers</p> |
| params.client | <code>string</code> |  | <p>client name for janis api</p> |
| params.accessToken | <code>string</code> |  | <p>access token for janis api</p> |
| params.page | <code>number</code> |  | <p>number of page</p> |
| params.pageSize | <code>number</code> |  | <p>quantity per page</p> |
| params.getTotals | <code>boolean</code> |  | <p>request api totals</p> |
| params.getOnlyTotals | <code>boolean</code> |  | <p>request api totals without body response</p> |

**Example**  
```js
const params = {
  client: 'my-client',
  accessToken: 'my-access-token',
  page: 1,
  pageSize: 10,
  getTotals: true,
  getOnlyTotals: false
};
const deviceDataHeaders = {
  'janis-app-name': 'MyApp',
  'janis-app-version': '1.0.0',
  'janis-app-device-os-name': 'iOS',
  'janis-app-device-os-version': '14.5',
  'janis-app-device-name': 'iPhone 12',
  'janis-app-device-id': '123456789'
};
const customHeaders = {
  'custom-header': 'custom-value'
};
const headers = getHeaders(params, deviceDataHeaders, customHeaders);
// {
//   'content-Type': 'application/json',
//   'janis-api-key': 'Bearer',
//   'janis-client': 'my-client',
//   'janis-api-secret': 'my-access-token',
//   'x-janis-page': 1,
//   'x-janis-page-size': 10,
//   'x-janis-totals': true,
//   'x-janis-only-totals': false,
//   'user-agent': 'MyApp/1.0.0 (iOS 14.5; iPhone 12; 123456789)',
//   'custom-header': 'custom-value'
// }
```
<a name="isArray"></a>

## isArray(arr) ⇒ <code>bool</code>
<p>return true or false if arg is a valid array</p>

**Kind**: global function  

| Param | Type |
| --- | --- |
| arr | <code>array</code> | 

**Example**  
```js
import {isArray} from '@janiscommerce/apps-helpers'
isArray(['Janis']) // true
```
<a name="isBoolean"></a>

## isBoolean(fn) ⇒ <code>bool</code>
<p>return true or false if arg is a valid boolean</p>

**Kind**: global function  

| Param | Type |
| --- | --- |
| fn | <code>boolean</code> | 

**Example**  
```js
import {isBoolean} from '@janiscommerce/apps-helpers'
isBoolean((true) // true
```
<a name="isFunction"></a>

## isFunction(fn) ⇒ <code>bool</code>
<p>return true or false if arg is a valid function</p>

**Kind**: global function  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 

**Example**  
```js
import {isFunction} from '@janiscommerce/apps-helpers'
isFunction(() => true) // true
```
<a name="isJSON"></a>

## isJSON(param) ⇒ <code>bool</code>
<p>return true or false if arg is a valid JSON</p>

**Kind**: global function  

| Param | Type |
| --- | --- |
| param | <code>string</code> | 

**Example**  
```js
import {isJSON} from '@janiscommerce/apps-helpers'
isJSON('{"key": "value"}') // true
```
<a name="isObject"></a>

## isObject(obj) ⇒ <code>bool</code>
<p>return true or false if arg is a valid object</p>

**Kind**: global function  

| Param | Type |
| --- | --- |
| obj | <code>object</code> | 

**Example**  
```js
import {isObject} from '@janiscommerce/apps-helpers'
isObject('Janis') // false
```
<a name="isRequired"></a>

## isRequired(param) ⇒ <code>Error</code>
<p>throw error with required param</p>

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| param | <code>string</code> | <p>name of the param that is required</p> |

**Example**  
```js
import {isRequired} from '@janiscommerce/apps-helpers'
const promise = async (arg = isRequired('arg')) => {
	return arg
}

promise() // Error: 'arg is required'
```
<a name="isString"></a>

## isString(str) ⇒ <code>bool</code>
<p>If the type of the argument is a string, return true, otherwise return false.</p>

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | <p>String to validate.</p> |

**Example**  
```js
import {isString} from '@janiscommerce/apps-helpers'
isString('Janis') // true
```
<a name="isValidFormatPosition"></a>

## isValidFormatPosition(position) ⇒ <code>boolean</code>
<p>If the position has the valid format required it will return true, otherwise return false.
For a position to be valid, you need a positionKey: string or a positionId: string</p>

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| position | <code>object</code> | <p>position object</p> |
| position.positionKey | <code>string</code> | <p>positionKey</p> |
| position.positionId | <code>string</code> | <p>positionId</p> |

**Example**  
```js
import {isValidFormatPosition} from '@janiscommerce/apps-helpers'
isValidFormatPosition({positionKey: '001-D-01-1', positionId: '632b40c90adf68f197caa91f'}) // true
isValidFormatPosition({positionKey: '001-D-01-1'}) // true
isValidFormatPosition({positionId: '632b40c90adf68f197caa91f'}) // true
isValidFormatPosition({positionKey: 123}) // false
isValidFormatPosition({}) // false
```
<a name="isValidUrl"></a>

## isValidUrl(str) ⇒ <code>boolean</code>
<p>return true if the argument is a valid url</p>

**Kind**: global function  
**Returns**: <code>boolean</code> - <p>true or false</p>  

| Param | Type |
| --- | --- |
| str | <code>string</code> | 

**Example**  
```js
isValidUrl('www.valid-url.com') // true
```
**Example**  
```js
isValidUrl('invalid-url.com') // false
```
**Example**  
```js
isValidUrl() // false
```
<a name="promiseWrapper"></a>

## promiseWrapper(fn) ⇒ <code>array.&lt;data, error&gt;</code>
<p>wrapper to execute promise and return tuple with data and error</p>

**Kind**: global function  

| Param | Type |
| --- | --- |
| fn | <code>function</code> | 

**Example**  
```js
import {promiseWrapper} from '@janiscommerce/apps-helpers'
const [data, error] = await promiseWrapper(promise())
```

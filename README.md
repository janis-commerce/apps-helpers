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
## Functions

<dl>
<dt><a href="#debounce">debounce(fn, [wait])</a> ⇒</dt>
<dd><p>The function debounce is a function that takes two arguments, a function and a number. The function
debounce returns a function that will execute the function passed to it after the number of
milliseconds passed to it</p></dd>
<dt><a href="#generateRandomId">generateRandomId()</a> ⇒ <code>string</code></dt>
<dd><p>returns a random combination of letters and/or numbers</p></dd>
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

<a name="generateRandomId"></a>

## generateRandomId() ⇒ <code>string</code>
<p>returns a random combination of letters and/or numbers</p>

**Kind**: global function  
**Example**  
```js
import {generateRandomId} from '@janiscommerce/apps-helpers'
generateRandomId() // '6kj4nk9c5so'
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
isValidFormatPosition({positionKey: '123'}) // true
isValidFormatPosition({positionId: '632b40c90adf68f197caa91f'}) // true
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

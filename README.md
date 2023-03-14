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
<dt><a href="#isArray">isArray(arr)</a> ⇒ <code>bool</code></dt>
<dd><p>return true or false if arg is a valid array</p></dd>
<dt><a href="#isObject">isObject(obj)</a> ⇒ <code>bool</code></dt>
<dd><p>return true or false if arg is a valid object</p></dd>
<dt><a href="#isString">isString(str)</a> ⇒ <code>bool</code></dt>
<dd><p>If the type of the argument is a string, return true, otherwise return false.</p></dd>
</dl>

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

# assemble-markdown-data

[![NPM version](https://badge.fury.io/js/assemble-markdown-data.png)](http://badge.fury.io/js/assemble-markdown-data)
[![NPM dependencies](https://david-dm.org/adjohnson916/assemble-markdown-data.png)](https://david-dm.org/adjohnson916/assemble-markdown-data)

> An [Assemble](http://assemble.io) plugin for automatic parsing of markdown in data.

## Usage

First, setup a project with Grunt and Assemble.

Then install the plugin: 

```sh
npm install --save-dev assemble-markdown-data
```

Add the plugin to your Grunt assemble config:

```js
assemble: {
  options: {
    plugins: [ 'assemble-markdown-data' ]
  },
  ...
},
```

For any data value you want to be parsed as markdown,
define it as an object with `markdown` key whose value is a markdown string.
Before rendering, this object will be replaced by the HTML that results from parsing the markdown.

## Example

```yml
# profile.yml
name: Anders D. Johnson
about:
  markdown: |
    My favorite things to do are:
    * Writing code
      * Especially JavaScript
    * Browsing [GitHub](https://github.com)
age: 23
```

Resulting JavaScript object:

```js
{
  "name": "Anders D. Johnson",
  "about": "<p>My favorite things to do are:</p><ul><li>Writing code<ul><li>Especially JavaScript</li></ul></li><li>Browsing <a href=\"https://github.com\">GitHub</a></li></ul>",
  "age": 23
}
```

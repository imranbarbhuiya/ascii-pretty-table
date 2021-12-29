![npm](https://img.shields.io/npm/v/ascii-pretty-table?style=for-the-badge)
![npm](https://img.shields.io/npm/dw/ascii-pretty-table?style=for-the-badge)
![GitHub](https://img.shields.io/github/license/imranbarbhuiya/ascii-pretty-table?style=for-the-badge)
![Build Status](https://img.shields.io/github/workflow/status/imranbarbhuiya/ascii-pretty-table/Build/main?label=Build&style=for-the-badge&logo=TypeScript)
![Test Status](https://img.shields.io/github/workflow/status/imranbarbhuiya/ascii-pretty-table/Test/main?label=Test&style=for-the-badge&logo=Jest)

# ascii-pretty-table

[ascii-pretty-table](https://www.npmjs.com/package/ascii-pretty-table), A simple and light weight library for creating ASCII tables.

[docs](https://www.imranbarbhuiya.github.io/ascii-pretty-table/)

## Uses

Install

```bash
npm install ascii-pretty-table
```

Example

```js
const ascii = require("ascii-pretty-table"); //commonjs
import ascii from "ascii-pretty-table"; //es6

const table = new ascii("A Title");
table.setHeading("Column 1", "Column 2");
table.addRow("Row 1", "Row 2");
table.addRow("Row 3", "Row 4");

console.log(table.toString());
```

Result

```js
+....................+
|      A Title       |
+''''''''''''''''''''+
| Column 1 | Column 2|
+''''''''''''''''''''+
|   Row 1  |  Row 2  |
+''''''''''''''''''''+
|   Row 3  |  Row 4  |
+''''''''''''''''''''+
```

You can create table without headings as well.

You can export or import table as JSON.

```js
const ascii = require("ascii-pretty-table");
const table = new ascii("A Title");
table.addRow("Row 1", "Row 2");
table.addRow("Row 3", "Row 4");

const json = table.toJSON();

const newTable = new ascii();
newTable.fromJSON(json);
```

Change separators

```js
table.setSeparators({
  top: ".",
  bottom: "'",
  edge: "|",
  fill: "-",
  corner: "+",
});
```

## Methods and Properties

read docs for [ascii-pretty-table](https://imranbarbhuiya.github.io/ascii-pretty-table/)

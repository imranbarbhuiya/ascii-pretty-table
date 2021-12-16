# ascii-pretty-table

[ascii-pretty-table](https://www.npmjs.com/package/ascii-pretty-table), A simple and light weight library for creating ASCII tables.

## Uses

Install

```bash
npm install ascii-pretty-table
```

Example

```js
const ascii = require("ascii-pretty-table");
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

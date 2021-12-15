# ascii-pretty-table

A simple and light weight library for creating ASCII tables.

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

```ascii
......................
|   A Title   |
''''''''''''''''''''''
|Column 1|Column 2|
''''''''''''''''''''''
|Row 1|Row 2|
''''''''''''''''''''''
|Row 3|Row 4|
''''''''''''''''''''''
```

You can table without headings as well.

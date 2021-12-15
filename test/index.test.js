const ascii = require("../index.js");
const assert = require("chai").assert;

const table = new ascii("A Title");
table.setHeading("Column 1", "Column 2");
table.addRow("Row 1", "Row 2");
table.addRow("Row 3", "Row 4");

assert.equal(
  table.toString(),
  "\n" +
    "+......................+\n" +
    "|   A Title   |\n" +
    "+''''''''''''''''''''''+\n" +
    "|Column 1|Column 2|\n" +
    "+''''''''''''''''''''''+\n" +
    "|Row 1|Row 2|\n" +
    "+''''''''''''''''''''''+\n" +
    "|Row 3|Row 4|\n" +
    "+''''''''''''''''''''''+\n",
  "Table is not correct"
);

const ascii = require("../index.js");

const table = new ascii("A Title");
table.setHeading("Column 1", "Column 2");
table.addRow("Row 1", "Row 2");
table.addRow("Row 3", "Row 4");

// table test
test("should show proper result", () => {
  expect(table.toString()).toBe(
    "\n" +
      "+......................+\n" +
      "|   A Title   |\n" +
      "+''''''''''''''''''''''+\n" +
      "|Column 1|Column 2|\n" +
      "+''''''''''''''''''''''+\n" +
      "|Row 1|Row 2|\n" +
      "+''''''''''''''''''''''+\n" +
      "|Row 3|Row 4|\n" +
      "+''''''''''''''''''''''+\n"
  );
});
// json test

const jsonTable = new ascii();
jsonTable.fromJSON(table.toJSON());

test("should be able to use json", () => {
  expect(jsonTable.toString()).toBe(table.toString());
});

const separatorTable = new ascii("A Title");
separatorTable.setHeading("Column 1", "Column 2");
separatorTable.addRow("Row 1", "Row 2");
separatorTable.addRow("Row 3", "Row 4");
separatorTable.setSeparator({
  edge: "!",
  top: "`",
  bottom: ".",
  corner: "*",
});

test("should change separator", () => {
  expect(separatorTable.toString()).toBe(
    "\n" +
      "*``````````````````````*\n" +
      "!   A Title   !\n" +
      "*......................*\n" +
      "!Column 1!Column 2!\n" +
      "*......................*\n" +
      "!Row 1!Row 2!\n" +
      "*......................*\n" +
      "!Row 3!Row 4!\n" +
      "*......................*\n"
  );
});

const sepTable = new ascii("A Title");
sepTable.setHeading("Column 1", "Column 2");
sepTable.addRow("Row 1", "Row 2");
sepTable.addRow("Row 3", "Row 4");
sepTable.setSeparator({
  corner: "*",
});

// table test
test("should fallback to default if not provided", () => {
  expect(sepTable.toString()).toBe(
    "\n" +
      "*......................*\n" +
      "|   A Title   |\n" +
      "*''''''''''''''''''''''*\n" +
      "|Column 1|Column 2|\n" +
      "*''''''''''''''''''''''*\n" +
      "|Row 1|Row 2|\n" +
      "*''''''''''''''''''''''*\n" +
      "|Row 3|Row 4|\n" +
      "*''''''''''''''''''''''*\n"
  );
});

const emptySepTable = new ascii("A Title");
emptySepTable.setHeading("Column 1", "Column 2");
emptySepTable.addRow("Row 1", "Row 2");
emptySepTable.addRow("Row 3", "Row 4");
emptySepTable.setSeparator({});

test("should support empty object in setSeparator", () => {
  expect(emptySepTable.toString()).toBe(table.toString());
});

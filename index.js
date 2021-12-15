class Table {
  constructor(name) {
    this.name = name;
    this.rows = [];
    this.setSeparator();
  }
  setSeparator(options) {
    const { edge, fill, top, bottom } = options || {};
    this.edge = edge || "|";
    this.fill = fill || "-";
    this.top = top || ".";
    this.bottom = bottom || "'";
    return this;
  }

  setHeading(...headings) {
    this.rows.unshift(headings);
  }
  addRow(...row) {
    this.rows.push(row);
  }
  toString() {
    let table = "\n";
    const repeat = Math.max(
      ...this.rows.map((row) => {
        let longest = 0;
        row.forEach((element) => {
          longest += element.length;
        });
        return longest + 6;
      }),
      this.name.length + 6
    );
    this.top
      .repeat(repeat)
      .split("")
      .forEach((char) => (table += char));
    table += "\n";
    table += `${this.edge} ${" ".repeat(this.name.length / 4)} ${
      this.name
    } ${" ".repeat(this.name.length / 4)} ${this.edge}\n`;
    this.bottom
      .repeat(repeat)
      .split("")
      .forEach((char) => (table += char));
    table += "\n";
    this.rows.forEach((row) => {
      table += `${this.edge}`;
      row.forEach((column) => {
        table += " ".repeat(
          Math.max(0, (this.name.length - column.length) / 4)
        );
        table += `${column}`;
        table += " ".repeat(
          Math.max(0, (this.name.length - column.length) / 4)
        );
        table += this.edge;
      });
      table += "\n" + this.bottom.repeat(repeat) + "\n";
    });
    return table;
  }
}

module.exports = Table;

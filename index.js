class Table {
  constructor(name) {
    this.name = name;
    this.rows = [];
    this.setSeparator({
      edge: "|",
      fill: "-",
      top: ".",
      bottom: "'",
      corner: "+",
    });
  }
  setSeparator({ edge, fill, top, bottom, corner }) {
    this.edge = edge || this.edge;
    this.fill = fill || this.fill;
    this.top = top || this.top;
    this.bottom = bottom || this.bottom;
    this.corner = corner || this.corner;
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
    table += this.corner;
    table += this.top.repeat(repeat);
    table += this.corner;
    table += "\n";
    table += `${this.edge} ${" ".repeat(this.name.length / 4)} ${
      this.name
    } ${" ".repeat(this.name.length / 4)} ${this.edge}\n`;
    table += this.corner;
    table += this.bottom.repeat(repeat);
    table += this.corner;
    table += "\n";
    this.rows.forEach((row) => {
      table += `${this.edge}`;
      row.forEach((column) => {
        const spaceRepeat = Math.max(0, (this.name.length - column.length) / 4);

        table += " ".repeat(spaceRepeat);
        table += `${column}`;
        table += " ".repeat(spaceRepeat);
        table += this.edge;
      });
      table += "\n";
      table += this.corner;
      table += this.bottom.repeat(repeat);
      table += this.corner;
      table += "\n";
    });
    return table;
  }
}

module.exports = Table;

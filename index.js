class Table {
  constructor(name) {
    this.name = name;
    this.rows = [];
    this.chars = {};
    this.setSeparator({
      edge: "|",
      fill: "-",
      top: ".",
      bottom: "'",
      corner: "+",
    });
  }
  setSeparator({ edge, fill, top, bottom, corner }) {
    this.chars.edge = edge || this.chars.edge;
    this.chars.fill = fill || this.chars.fill;
    this.chars.top = top || this.chars.top;
    this.chars.bottom = bottom || this.chars.bottom;
    this.chars.corner = corner || this.chars.corner;
    return this;
  }

  setHeading(...headings) {
    this.rows.unshift(headings);
  }
  addRow(...row) {
    this.rows.push(row);
  }
  fromJSON(json) {
    this.name = json.name;
    this.chars = json.chars;
    this.rows = json.rows;
    return this;
  }
  toJSON() {
    return {
      name: this.name,
      chars: this.chars,
      rows: this.rows,
    };
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
    table += this.chars.corner;
    table += this.chars.top.repeat(repeat);
    table += this.chars.corner;
    table += "\n";
    table += `${this.chars.edge} ${" ".repeat(this.name.length / 4)} ${
      this.name
    } ${" ".repeat(this.name.length / 4)} ${this.chars.edge}\n`;
    table += this.chars.corner;
    table += this.chars.bottom.repeat(repeat);
    table += this.chars.corner;
    table += "\n";
    this.rows.forEach((row) => {
      table += `${this.chars.edge}`;
      row.forEach((column) => {
        const spaceRepeat = Math.max(0, (this.name.length - column.length) / 4);

        table += " ".repeat(spaceRepeat);
        table += `${column}`;
        table += " ".repeat(spaceRepeat);
        table += this.chars.edge;
      });
      table += "\n";
      table += this.chars.corner;
      table += this.chars.bottom.repeat(repeat);
      table += this.chars.corner;
      table += "\n";
    });
    return table;
  }
}

module.exports = Table;

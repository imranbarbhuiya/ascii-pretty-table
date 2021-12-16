class Table {
  /**
   *
   * @param {String} name
   */
  constructor(name) {
    this.name = name;
    /**
     * @type {Array<Array<String>>}
     */
    this.rows = [];
    /**
     * @type {{edge:String, fill:String, top:String, bottom: String, corner:String}}
     * @default
     * edge: "|",
     * fill: "─",
     * top: ".",
     * bottom: "'",
     * corner: "+"
     *
     */
    this.chars = {};
    this.setSeparator({
      edge: "|",
      fill: "─",
      top: ".",
      bottom: "'",
      corner: "+",
    });
  }
  /**
   *
   * @param {{edge:String, fill:String, top:String, bottom: String, corner:String}} param0
   * @returns {Table}
   */
  setSeparator({ edge, fill, top, bottom, corner }) {
    this.chars.edge = edge || this.chars.edge;
    this.chars.fill = fill || this.chars.fill;
    this.chars.top = top || this.chars.top;
    this.chars.bottom = bottom || this.chars.bottom;
    this.chars.corner = corner || this.chars.corner;
    return this;
  }

  /**
   *
   * @param  {...string} headings
   * @returns {Table}
   */
  setHeading(...headings) {
    this.rows.unshift(headings);
    return this;
  }
  /**
   *
   * @param  {...string} row
   * @returns {Table}
   */
  addRow(...row) {
    this.rows.push(row);
    return this;
  }
  /**
   *
   * @param {JSON} json
   * @returns {Table}
   */
  fromJSON(json) {
    this.name = json.name;
    this.chars = json.chars;
    this.rows = json.rows;
    return this;
  }
  /**
   *
   * @returns {JSON}
   */
  toJSON() {
    return {
      name: this.name,
      chars: this.chars,
      rows: this.rows,
    };
  }
  /**
   *
   * @returns {String}
   */
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

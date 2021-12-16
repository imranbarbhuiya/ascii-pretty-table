declare class Table {
  name: string;
  rows: string[][];
  chars: {
    edge: string;
    fill: string;
    top: string;
    bottom: string;
    corner: string;
  };
  constructor(name: string);
  setSeparator({
    edge,
    fill,
    top,
    bottom,
    corner,
  }: {
    edge?: string;
    fill?: string;
    top?: string;
    bottom?: string;
    corner?: string;
  }): this;
  setHeading(...headings: string[]): this;
  addRow(...row: string[]): this;
  fromJSON(json: JSON): this;
  toJSON(): JSON;
  toString(): string;
}
export default Table;

declare class Table {
  name: string;
  rows: string[][];
  edge: string;
  fill: string;
  top: string;
  bottom: string;
  corner: string;
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
  toString(): string;
}
export default Table;

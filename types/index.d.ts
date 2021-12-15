declare class Table {
    name: string;
    rows: string[][];
    edge: string;
    fill: string;
    top: string;
    bottom: string;
    constructor(name: string);
    setHeading(...headings: string[]): this;
    addRow(...row: string[]): this;
    toString(): string;
}
export default Table;

export = Table;
declare class Table {
    /**
     *
     * @param {String} name
     */
    constructor(name: string);
    name: string;
    /**
     * @type {Array<Array<String>>}
     */
    rows: Array<Array<string>>;
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
    chars: {
        edge: string;
        fill: string;
        top: string;
        bottom: string;
        corner: string;
    };
    /**
     *
     * @param {{edge:String, fill:String, top:String, bottom: String, corner:String}} param0
     * @returns {Table}
     */
    setSeparator({ edge, fill, top, bottom, corner }: {
        edge: string;
        fill: string;
        top: string;
        bottom: string;
        corner: string;
    }): Table;
    /**
     *
     * @param  {...string} headings
     * @returns {Table}
     */
    setHeading(...headings: string[]): Table;
    /**
     *
     * @param  {...string} row
     * @returns {Table}
     */
    addRow(...row: string[]): Table;
    /**
     *
     * @param {JSON} json
     * @returns {Table}
     */
    fromJSON(json: JSON): Table;
    /**
     *
     * @returns {JSON}
     */
    toJSON(): JSON;
    /**
     *
     * @returns {String}
     */
    toString(): string;
}

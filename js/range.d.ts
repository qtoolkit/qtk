export declare class Range {
    first: number;
    second: number;
    constructor(first: number, second: number);
    dispose(): void;
    init(first: number, second: number): Range;
    static create(first?: number, second?: number): Range;
    static range: Range;
}

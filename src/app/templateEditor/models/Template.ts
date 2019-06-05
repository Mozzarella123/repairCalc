import Block from "./Block";

export default interface Template {
    id? : number;
    title?: string;
    blocks?: Array<Block>
}
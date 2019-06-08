import Block, { isBlock } from "./Block";

export default interface Template {
    id : number;
    title: string;
    blocks: Array<Block>
}

export function isTemplate(obj: any): obj is Template {
    return obj != null && 
        typeof obj.id === 'number' &&
        typeof obj.title === 'string' && 
        Array.isArray(obj.blocks) &&
        obj.blocks.every(block => isBlock(block));
}

export function isTemplatesArray(arr: any[]): arr is Template[] {
    return Array.isArray(arr) && arr.every(template => isTemplate(template));
}

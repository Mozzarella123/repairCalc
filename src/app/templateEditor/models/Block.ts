export default interface Block {
    id: number;
    title : string;
    content : string;
}

export function isBlock(obj: any): obj is Block {
    return obj != null &&
        typeof obj.id === 'number' && 
        typeof obj.title === 'string' &&
        typeof obj.content === 'string';
}

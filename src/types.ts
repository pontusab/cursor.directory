export interface Author {
    name: string;
    url?: string;
    avatar: string;
}

// export enum ContentType {
//     RULE = "rule",
//     VIDEO = "video",
//     PROMPT = "prompt",
//     INSTRUCTION = "instruction",
// }


interface Base {
    title: string;
    slug: string;
    tags: string[];
    author: Author;
}

export interface Rule extends Base {
    content: string;
    libs: string[];
}

export interface Video extends Base {
    url: string;
    description: string;
}

export interface Prompt extends Base {
    content: string;
    libs: string[];
}

export interface Instruction extends Base {
    description: string;
    steps: string[];
    prompts: Prompt[];
}
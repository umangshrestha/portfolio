export interface Project {
    id: number;
    name: string;
    description: string;
    tags: string[];
    github: string;
    demoUrl?: string;
}
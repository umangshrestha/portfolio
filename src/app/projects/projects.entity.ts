export interface Project {
    id: number;
    name: string;
    description: string;
    tags: string[];
    github: string;
    image: string;
    demoUrl?: string;
}
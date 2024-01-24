import { Photo } from "./photo";
import { Technology } from "./technology";

export class Project {
    id: number;
    title: string;
    shortDescription: string;
    longDescription: string[];
    photos: Photo[];
    technologies: Technology[];
    link: string;
    constructor(id: number, title: string, shortDescription: string, longDescription: string[], photos: Photo[], technologies: Technology[], link: string) {
        this.id = id;
        this.title = title;
        this.shortDescription = shortDescription;
        this.longDescription = longDescription;
        this.photos = photos;
        this.technologies = technologies;
        this.link = link;
    }
}
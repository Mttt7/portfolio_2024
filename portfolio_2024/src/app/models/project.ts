import { Photo } from "./photo";

export class Project {
    id: number;
    title: string;
    shortDescription: string;
    longDescription: string[];
    photos: Photo[];
    link: string;
    constructor(id: number, title: string, shortDescription: string, longDescription: string[], photos: Photo[], link: string) {
        this.id = id;
        this.title = title;
        this.shortDescription = shortDescription;
        this.longDescription = longDescription;
        this.photos = photos;
        this.link = link;
    }
}
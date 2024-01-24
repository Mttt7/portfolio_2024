import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { Technology } from '../models/technology';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  technologies = new Map<string, Technology>([
    ["Angular", new Technology("Angular", "../../../assets/images/technologies/angular_icon.png")],
    ["Git", new Technology("Git", "../../../assets/images/technologies/git_icon.png")],
    ["MySql", new Technology("MySql", "../../../assets/images/technologies/mysql_icon.png")],
    ["SpringBoot", new Technology("Spring Boot", "../../../assets/images/technologies/spring_boot_icon.svg")],
  ])

  projects: Project[] = [
    new Project(0,
      "Study Smart",
      "Fullstack application which will help you to study in a effective way.",
      ["Since I remember, I've been using apps like Anki to memorize knowledge needed for my exams and tests. Therefore, I decided to create StudySmart, an app designed to facilitate smart studying through the use of flashcards.",
        "This project is built upon technologies such as MySql, Spring Boot, Angular, and Okta for seamless login functionality."
      ],
      [{
        itemImageSrc: "../assets/images/study_smart_images/ss1.png",
        thumbnailImageSrc: "../assets/images/study_smart_images/ss1.png",
        alt: "Image 1",
        title: "Image 1"
      },
      {
        itemImageSrc: "../assets/images/study_smart_images/ss2.png",
        thumbnailImageSrc: "../assets/images/study_smart_images/ss2.png",
        alt: "Image 2",
        title: "Image 2"
      },
      {
        itemImageSrc: "../assets/images/study_smart_images/ss3.png",
        thumbnailImageSrc: "../assets/images/study_smart_images/ss3.png",
        alt: "Image 3",
        title: "Image 3"
      },
      {
        itemImageSrc: "../assets/images/study_smart_images/ss4.png",
        thumbnailImageSrc: "../assets/images/study_smart_images/ss4.png",
        alt: "Image 4",
        title: "Image 4"
      },
      {
        itemImageSrc: "../assets/images/study_smart_images/ss5.png",
        thumbnailImageSrc: "../assets/images/study_smart_images/ss5.png",
        alt: "Image 5",
        title: "Image 5"
      },
      {
        itemImageSrc: "../assets/images/study_smart_images/ss6.png",
        thumbnailImageSrc: "../assets/images/study_smart_images/ss6.png",
        alt: "Image 6",
        title: "Image 6"
      },
      {
        itemImageSrc: "../assets/images/study_smart_images/ss7.png",
        thumbnailImageSrc: "../assets/images/study_smart_images/ss7.png",
        alt: "Image 7",
        title: "Image 7"
      },
      {
        itemImageSrc: "../assets/images/study_smart_images/ss8.png",
        thumbnailImageSrc: "../assets/images/study_smart_images/ss8.png",
        alt: "Image 8",
        title: "Image 8"
      }
      ],
      [this.technologies.get("Angular")!, this.technologies.get("MySql")!, this.technologies.get("SpringBoot")!]
      ,
      "https://github.com/Mttt7/study_smart_fullstack?tab=readme-ov-file"),
  ]
  constructor() { }
}

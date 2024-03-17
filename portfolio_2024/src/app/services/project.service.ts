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
    ["Docker", new Technology("Docker", "../../../assets/images/technologies/docker.svg")],
    ["Firebase", new Technology("Firebase", "../../../assets/images/technologies/firebase-icon.svg")],
    ["MongoDb", new Technology("MongoDb", "../../../assets/images/technologies/mongodb.svg")],
    ["NodeJS", new Technology("NodeJS", "../../../assets/images/technologies/nodejs.svg")],
    ["ExpressJS", new Technology("ExpressJS", "../../../assets/images/technologies/express.svg")],
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
    new Project(1, "Social Media App", "Fullstack social media application which helps people to connect with each other", [
      "This project is built upon technologies such as MySQL, Spring Boot, Angular, and Firebase for image storage. To secure user authentication and data, I implemented JWT authentication in the application.",
      "More screenshots and my code are available on GitHub."], [
      {
        itemImageSrc: "../assets/images/social_media_images/sm1.png",
        thumbnailImageSrc: "../assets/images/social_media_images/sm1.png",
        alt: "Image 1",
        title: "Image 1"
      },
      {
        itemImageSrc: "../assets/images/social_media_images/sm2.png",
        thumbnailImageSrc: "../assets/images/social_media_images/sm2.png",
        alt: "Image 2",
        title: "Image 2"
      },
      {
        itemImageSrc: "../assets/images/social_media_images/sm3.png",
        thumbnailImageSrc: "../assets/images/social_media_images/sm3.png",
        alt: "Image 3",
        title: "Image 3"
      },
      {
        itemImageSrc: "../assets/images/social_media_images/sm4.png",
        thumbnailImageSrc: "../assets/images/social_media_images/sm4.png",
        alt: "Image 4",
        title: "Image 4"
      },
      {
        itemImageSrc: "../assets/images/social_media_images/sm5.png",
        thumbnailImageSrc: "../assets/images/social_media_images/sm5.png",
        alt: "Image 5",
        title: "Image 5"
      },
      {
        itemImageSrc: "../assets/images/social_media_images/sm6.png",
        thumbnailImageSrc: "../assets/images/social_media_images/sm6.png",
        alt: "Image 6",
        title: "Image 6"
      }], [this.technologies.get("Angular")!, this.technologies.get("MySql")!, this.technologies.get("SpringBoot")!, this.technologies.get("Firebase")!], "https://github.com/Mttt7/Social_Media_App_BACKEND"),
    new Project(2, "Clinic Manager", "Fullstack application which helps to manage a clinic.", ["An app to help run a clinic smoothly. It's my first full-stack project and taught me a lot about how servers and clients work together. I built it using MongoDB, Express.js, and Angular.", "More screenshots and the code are available on GitHub."],
      [
        {
          itemImageSrc: "../assets/images/clinic_manager/cm1.png",
          thumbnailImageSrc: "../assets/images/clinic_manager/cm1.png",
          alt: "Image 1",
          title: "Image 1"
        },
        {
          itemImageSrc: "../assets/images/clinic_manager/cm2.png",
          thumbnailImageSrc: "../assets/images/clinic_manager/cm2.png",
          alt: "Image 2",
          title: "Image 2"
        },
        {
          itemImageSrc: "../assets/images/clinic_manager/cm3.png",
          thumbnailImageSrc: "../assets/images/clinic_manager/cm3.png",
          alt: "Image 3",
          title: "Image 3"
        },
        {
          itemImageSrc: "../assets/images/clinic_manager/cm4.png",
          thumbnailImageSrc: "../assets/images/clinic_manager/cm4.png",
          alt: "Image 4",
          title: "Image 4"
        }
      ], [this.technologies.get("Angular")!, this.technologies.get("MongoDb")!, this.technologies.get("NodeJS")!, this.technologies.get("ExpressJS")!], "https://github.com/Mttt7/clinic-manager")
  ]
  constructor() { }
}

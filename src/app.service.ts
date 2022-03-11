import { Injectable } from '@nestjs/common';
import * as data from "../database/essays.json";

@Injectable()
export class AppService {

  getEssayByTitle(title: string): string {
    let toReturn = "No Essay Found";
   data.authors.filter(element => {
      element.essays.forEach(essay => {
        if (essay.title_slug === title) {
          if(essay.text) {
            toReturn = essay.text;
          }
        }
      })
    });

    return toReturn;

  }

  getEssaysByAuthor(authorName: string) {
    const authorObject = this.getAuthorObject(authorName);
    console.log(authorObject);
    console.log("author name: " + authorObject);
    return authorObject.authorListOfEssays;
  }

  getAuthorObject(authorName: string) {
    const authorObject = data.authors.filter(id => id.author === authorName);
    return authorObject[0];
  }

  getRandomEssay() {
    let listOfEssays = [];
    data.authors.filter(element => {
      element.essays.forEach(essay => {
       listOfEssays.push(essay);
      })
    });

    let randomNumber = this.getRandomInt(listOfEssays.length);
    return listOfEssays[randomNumber];

  }

  getRandomEssayByAuthor(authorName: string){
    const authorObject = this.getAuthorObject(authorName);
    let randomNumber = this.getRandomInt(authorObject.authorListOfEssays.length);
    return authorObject.essays[randomNumber];
  }

  getEssayByWordCount(number: number) {
    let essayToReturn = {
      title: "No essay fits",
      title_slug: "error",
      text: "No essay",
      wordCount: 0
    }
    let currentMax = 0;
    data.authors.filter(element => {
      element.essays.forEach(essay => {
        if (essay.wordCount < number) {
          if (essay.wordCount > currentMax) {
            currentMax = essay.wordCount;
            essayToReturn = essay;
          }
        }
      })
    });

    return essayToReturn;
  }

  getAuthorBio(authorName: string) {
    let authorObject = this.getAuthorObject(authorName);
    return authorObject.authorBio;
  }

  getListOfAuthors() {
    let authors = [];
    data.authors.forEach(element => {
      authors.push(element.authorDisplayName);
    })

    return authors;
  }

  getRandomInt(maximum) {
    return Math.floor(Math.random() * maximum);
  }
}

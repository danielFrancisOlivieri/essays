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

  returnEssay(element, index, array) {
    const essayObject = element.essays.filter(i => i.title_slug === 'of_liars');
    console.log(essayObject[0].text);
    return essayObject
  }

  getAuthorObject(authorName: string) {
    const authorObject = data.authors.filter(id => id.author === authorName);
    return authorObject[0];
  }
}

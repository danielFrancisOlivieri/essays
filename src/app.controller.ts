import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  healthcheck(): string {
    return "healthy"
  }

  @Get('essaysByTitle/:id')
  getEssayByTitle(@Param() id): string {
    return this.appService.getEssayByTitle(id.id);
  }

  @Get('essaysByAuthor/:id')
  getEssaysByAuthor(@Param() id) {
    return this.appService.getEssaysByAuthor(id.id);
  }

  @Get("random")
  getRandomEssay(){
    return this.appService.getRandomEssay();
  }

  @Get('essayByWordCount/:id')
  getEssayByWordCount(@Param() id) {
    return this.appService.getEssayByWordCount(id.id);
  }

  @Get('essayByAuthor/:id') 
  getRandomEssayByAuthor(@Param() id) {
    return this.appService.getRandomEssayByAuthor(id.id);
  }

  @Get('authorBio/:id')
  getAuthorBio(@Param() id) {
    return this.appService.getAuthorBio(id.id);
  }

  @Get('listOfAuthors')
  getListOfAuthors() {
    return this.appService.getListOfAuthors();
  }

}

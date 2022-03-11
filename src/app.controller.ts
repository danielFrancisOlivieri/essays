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
  getEssayByName(@Param() id): string {
    return this.appService.getEssayByTitle(id.id);
  }

}

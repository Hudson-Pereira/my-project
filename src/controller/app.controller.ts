import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from '../service/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  root(@Res() res: Response) {
    return res.render(
      this.appService.getViewName(),
      // { message: 'Hello world! MVC' },
    );
  }
}

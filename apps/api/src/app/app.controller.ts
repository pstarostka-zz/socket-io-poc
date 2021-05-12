import { Message } from '@chat-socket-io/api-interfaces';
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): Message {
    this.appService.emit();
    return this.appService.getData();
  }
}

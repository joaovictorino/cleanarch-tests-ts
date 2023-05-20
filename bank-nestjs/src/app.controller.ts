import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Account } from "@bank/core/model/account"; 

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    const account = new Account();
    return account.transfer().toString();
    //return this.appService.getHello();
  }
}

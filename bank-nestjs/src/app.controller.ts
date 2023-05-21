import { Controller, Get } from '@nestjs/common';
import { Account } from '@bank/core/model/account';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  getHello(): string {
    const account = new Account();
    return account.transfer().toString();
  }
}

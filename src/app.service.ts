import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!2';
  }
  getWelcome(): string {
    return 'Welcome to my World! User';
  }
}

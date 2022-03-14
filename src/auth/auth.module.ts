import { Module } from '@nestjs/common';
//added responsible for authenticating our application
import { PassportModule } from '@nestjs/passport';
import { BasicStrategy } from './auth-basic.strategy';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [PassportModule, ConfigModule],
  providers: [BasicStrategy],
})
export class AuthModule {}

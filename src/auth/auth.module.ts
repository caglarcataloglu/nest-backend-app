import { Module } from '@nestjs/common';
//added responsible for authenticating our application
import { PassportModule } from '@nestjs/passport';
import { BasicStrategy } from './auth-basic.strategy';
import { ConfigModule } from '@nestjs/config';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [PassportModule, ConfigModule, AuthModule],
  providers: [BasicStrategy, AuthService],
  controllers: [AuthController],
})
export class AuthModule {}

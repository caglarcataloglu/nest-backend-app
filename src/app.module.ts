import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { User } from './user/user.module';

@Module({
  imports: [AuthModule, User],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

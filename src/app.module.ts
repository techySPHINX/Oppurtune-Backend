import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from "./prisma.service";
import { ConfigModule } from "@nestjs/config";
import { UserController } from './user/user.controller';
import { UserModule } from "./user/user.module";
import { UserService } from "./user/user.service";

@Module({
  imports: [ConfigModule, UserModule],
  controllers: [AppController, UserController],
  providers: [AppService, UserService, PrismaService],
})
export class AppModule {}

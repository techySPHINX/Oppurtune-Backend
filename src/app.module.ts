import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from "./prisma.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { UserController } from './user/user.controller';
import { UserModule } from "./user/user.module";
import { UserService } from "./user/user.service";
import { CompanyModule } from './company/company.module';
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { ApplicationModule } from './application/application.module';
import { JobModule } from './job/job.module';
import { ApplicationService } from "./application/application.service";

@Module({
  imports: [  PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('SECRET_KEY'),
        signOptions: { expiresIn: '1d' },
      }),
      inject: [ConfigService],
    }),ConfigModule, UserModule, CompanyModule, ApplicationModule, JobModule],
  controllers: [AppController, UserController],
  providers: [AppService, UserService, PrismaService, ApplicationService],
})
export class AppModule {}

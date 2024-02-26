import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsModule } from './cars/cars.module';
import { PrismaService } from './prisma/primsa.service';


@Module({
  imports: [CarsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}

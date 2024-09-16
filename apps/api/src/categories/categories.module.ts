import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import {AuthService} from "../auth/auth.service";

@Module({
  controllers: [CategoriesController],
  providers: [AuthService, CategoriesService],
})
export class CategoriesModule {}

import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ReviewsModule } from "./reviews/reviews.module";
import { AuthModule } from "./auth/auth.module";
import { ReviewsController } from "./reviews/reviews.controller";
import { ReviewsService } from "./reviews/reviews.service";

@Module({
  imports: [ReviewsModule, AuthModule],
  controllers: [ReviewsController, AppController],
  providers: [ReviewsService, AppService],
})
export class AppModule {}

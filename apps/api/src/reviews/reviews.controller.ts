import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { ReviewsService } from "./reviews.service";
import { CreateReviewDto } from "./dto/CreateReviewDto";

@Controller("reviews")
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Get()
  async getReviews() {
    return this.reviewsService.getReviews();
  }

  @Post()
  async createReview(@Body() createReviewDto: CreateReviewDto) {
    return this.reviewsService.createReview(createReviewDto);
  }

  @Put(":review_id")
  async updateReview(
    @Param("review_id") reviewId: number,
    @Body() CreateReviewDto: CreateReviewDto,
  ) {
    return this.reviewsService.updateReview(reviewId, CreateReviewDto);
  }
  d;

  @Delete(":review_id")
  async deleteReview(
    @Param("review_id") reviewId: number) {
    return this.reviewsService.deleteReview(reviewId);
  }
}

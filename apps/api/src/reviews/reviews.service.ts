import { Injectable } from "@nestjs/common";
import { createClient } from "@supabase/supabase-js";
import { CreateReviewDto } from "./dto/CreateReviewDto";

const supabase = createClient(
  "https://algsfyxfsvqgthqbmwzr.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFsZ3NmeXhmc3ZxZ3RocWJtd3pyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYxMTEyODgsImV4cCI6MjA0MTY4NzI4OH0.7Y2QUFRraSGmt3NWbSGSUflMx71kjxWCVo8jA5EWjII",
);

@Injectable()
export class ReviewsService {
  async getReviews() {
    const { data, error } = await supabase
      .from("reviews")
      .select("*")
      .is("deleted_at", null);

    if (error) throw new Error(error.message);
    return data;
  }

  async createReview(createReviewDto: CreateReviewDto) {
    const { categoryId, userId, title, content, rating, visibility } =
      createReviewDto;
    const { data, error } = await supabase.from("reviews").insert([
      {
        category_id: categoryId,
        user_id: userId,
        title,
        content,
        rating,
        visibility,
        created_at: new Date(),
        deleted_at: null,
      },
    ]);

    if (error) throw new Error(error.message);
    return data;
  }

  async updateReview(reviewId: number, createReviewDto: CreateReviewDto) {
    const { categoryId, userId, title, content, rating, visibility } =
      createReviewDto;
    const { data, error } = await supabase
      .from("reviews")
      .update({
        category_id: categoryId,
        user_id: userId,
        title,
        content,
        rating,
        visibility,
        updated_at: new Date(),
      })
      .eq("id", reviewId)
      .is("deleted_at", null); // 삭제된 리뷰는 수정할 수 없도록 필터링

    if (error) throw new Error(error.message);
    return data;
  }

  async deleteReview(reviewId: number) {
    const { data, error } = await supabase
      .from("reviews")
      .update({ deleted_at: new Date() })
      .eq("id", reviewId);

    if (error) throw new Error(error.message);
    return data;
  }
}

import {
  IsNotEmpty,
  IsString,
  IsInt,
  IsOptional,
  IsIn,
  Max,
  Min,
  IsUUID,
} from "class-validator";

export class CreateReviewDto {
  @IsNotEmpty()
  @IsInt()
  categoryId: number;

  @IsNotEmpty()
  @IsString()
  @IsUUID()
  userId: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  content?: string;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  @Max(5)
  rating: number;

  @IsNotEmpty()
  @IsIn(["private", "followers"])
  visibility: "private" | "followers";
}

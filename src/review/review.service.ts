import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

import { CreateReviewInput } from './dto/create-review.input';
import { UpdateReviewInput } from './dto/update-review.input';
import { User } from '../user/entities/user.entity';
import { Review } from './entities/review.entity';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Review) private reviewRepository: Repository<Review>,
  ) {}

  create(createReviewInput: CreateReviewInput, user: User): Promise<Review> {
    const newReview = this.reviewRepository.create(createReviewInput);
    newReview.userId = user.id;
    return this.reviewRepository.save(newReview);
  }

  findAll(): Promise<Review[]> {
    return this.reviewRepository.find();
  }

  findOne(id: number): Promise<Review> {
    return this.reviewRepository.findOne(id);
  }

  update(
    id: number,
    updateReviewInput: UpdateReviewInput,
  ): Promise<UpdateResult> {
    return this.reviewRepository.update(id, updateReviewInput);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.reviewRepository.delete(id);
  }
}

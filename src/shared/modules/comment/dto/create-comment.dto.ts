import {IsMongoId, IsNumber, IsString, Length, Max, Min} from 'class-validator';
import {CreateCommentMessage} from './create-comment.message.js';

export class CreateCommentDto {
  @IsString({message: CreateCommentMessage.text.invalidFormat})
  @Length(5, 1024, {message: CreateCommentMessage.text.lengthField})
  public text: string;

  @Min(1, {message: CreateCommentMessage.rating.minValue})
  @Max(5, {message: CreateCommentMessage.rating.maxValue})
  @IsNumber({}, {message: CreateCommentMessage.rating.invalidFormat})
  public rating: number;

  @IsMongoId({message: CreateCommentMessage.offerId.invalidFormat})
  public offerId: string;

  @IsMongoId({message: CreateCommentMessage.userId.invalidFormat})
  public userId: string;
}

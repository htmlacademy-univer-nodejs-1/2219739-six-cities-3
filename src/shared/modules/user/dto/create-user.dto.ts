import {UserType} from '../../../types/index.js';
import {IsEmail, IsEnum, IsString, Length} from 'class-validator';
import {CreateUserMessage} from './create-user.message.js';

export class CreateUserDto {
  @IsString({message: CreateUserMessage.userName.invalidFormat})
  @Length(1, 15, {message: CreateUserMessage.userName.lengthField})
  public userName: string;

  @IsEmail({}, {message: CreateUserMessage.email.invalidFormat})
  public email: string;

  @IsString({message: CreateUserMessage.avatar.invalidFormat})
  public avatar: string;

  @IsEnum(UserType, {message: CreateUserMessage.userType.invalidFormat})
  public userType: UserType;

  @IsString({message: CreateUserMessage.password.invalidFormat})
  @Length(6, 12, {message: CreateUserMessage.password.lengthField})
  public password: string;
}


import {UserType} from '../../../types/index.js';

export class CreateUserDto {
  public userName: string;
  public email: string;
  public avatar?: string;
  public password: string;
  public userType: UserType;

  constructor(userName: string, email: string, password: string, userType: UserType, avatar?: string) {
    this.userName = userName;
    this.email = email;
    this.password = password;
    this.userType = userType;
    this.avatar = avatar;
  }
}


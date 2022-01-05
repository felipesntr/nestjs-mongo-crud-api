import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '@/users/user.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  /**
   * Create a new user
   * @param name
   * @param email
   * @param password
   */
  async create(name: string, email: string, password: string): Promise<User> {
    const createdUser = new this.userModel({ name, email, password });
    return createdUser.save();
  }

  /**
   * Find all users
   */
  async findAll(): Promise<Array<User>> {
    return this.userModel.find().exec();
  }
}

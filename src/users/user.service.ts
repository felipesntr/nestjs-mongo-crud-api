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
   * @param surname
   * @param points
   */
  async create(name: string, surname: string, points: string): Promise<User> {
    const createdUser = new this.userModel({ name, surname, points });
    return createdUser.save();
  }

  /**
   * Find all users
   */
  async findAll(): Promise<Array<User>> {
    return this.userModel.find().exec();
  }
}

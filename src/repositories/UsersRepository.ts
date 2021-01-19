import { EntityRepository, Repository } from 'typeorm';
import { hash } from 'bcryptjs'

import User from '../models/User';

@EntityRepository(User)
class UsersRepository extends Repository<User> {
  public async findByEmail(email: string): Promise<User | null> {
    const findUser = await this.findOne({
      where: { email },
    });

    return findUser || null;
  }

  public async hashPassword(password: string): Promise<string> {
    const hashedPassword = await hash(password, 8);

    return hashedPassword;
  }
}

export default UsersRepository;

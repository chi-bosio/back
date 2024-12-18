import { Injectable } from '@nestjs/common';
import { UsersRepository } from '@modules/Users/users.repository';
import { CreateUserDto } from '@modules/Users/dtos/CreateUser.dto';
import { Users } from '@modules/Users/users.entity';
import { UpdateUserPremiumStatusDto } from '@modules/Users/dtos/ChangeIsPremium';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UsersRepository) {}
  register(newUser: CreateUserDto): Promise<{ message: string }> {
    return this.userRepository.register(newUser);
  }

  findByEmail(email: string) {
    return this.userRepository.findByEmail(email);
  }

  findById(id: string) {
    return this.userRepository.findById(id);
  }

  getUserById(id: string) {
    return this.userRepository.getUserById(id);
  }

  resetPassword(email: string, newPassword: string) {
    return this.userRepository.resetPassword(email, newPassword);
  }
  updateUser(id: string, user: Partial<Users>) {
    return this.userRepository.updateUser(id, user);
  }

  updateUserPremiumStatus(
    id: string,
    updatePremiumStatusDto: UpdateUserPremiumStatusDto,
  ) {
    return this.userRepository.updateUserPremiumStatus(
      id,
      updatePremiumStatusDto,
    );
  }
}

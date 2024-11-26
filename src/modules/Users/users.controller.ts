import { Body, Controller, Get, Param, Patch, Put } from '@nestjs/common';
import { UsersService } from '@modules/Users/users.service';
import { UpdateUserDto } from '@modules/Users/dtos/UpdateUser.dto';
import { UpdateUserPremiumStatusDto } from '@modules/Users/dtos/ChangeIsPremium';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.userService.getUserById(id);
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() user: UpdateUserDto) {
    return this.userService.updateUser(id, user);
  }
  @Patch(':id/premium-status')
  async updatePremiumStatus(
    @Param('id') id: string,
    @Body() updatePremiumStatusDto: UpdateUserPremiumStatusDto,
  ) {
    const result = await this.userService.updateUserPremiumStatus(
      id,
      updatePremiumStatusDto,
    );

    if (result.success) {
      return result;
    } else {
      throw new Error(result.message);
    }
  }
}

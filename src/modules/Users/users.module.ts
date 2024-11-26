import { forwardRef, Module } from '@nestjs/common';
import { UsersController } from '@modules/Users/users.controller';
import { UsersService } from '@modules/Users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from '@modules/Users/users.entity';
import { UsersRepository } from '@modules/Users/users.repository';
import { Credentials } from '@modules/credentials/credentials.entity';
import { MailModule } from '@modules/mail/mail.module';
import { AuthModule } from '@modules/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Users, Credentials]),
    MailModule,
    forwardRef(() => AuthModule),
  ],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
  exports: [UsersService],
})
export class UsersModule {}

import { forwardRef, Module } from '@nestjs/common';
import { AuthController } from '@modules/auth/auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from '@modules/users/users.entity';
import { Credentials } from '@modules/credentials/credentials.entity';
import { UsersRepository } from '@modules/users/users.repository';
import { UsersService } from '@modules/users/users.service';
import { MailModule } from '@modules/mail/mail.module';
import { AuthService } from '@modules/auth/auth.service';
import { ConfigModule } from '@nestjs/config';
import googleOathConfig from '@modules/auth/config/google-oath.config';
import GoogleStrategy from '@modules/auth/strategies/google.strategy';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '@modules/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Users, Credentials]),
    forwardRef(() => MailModule),
    forwardRef(() => UsersModule),
    ConfigModule.forFeature(googleOathConfig),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '60m' },
    }),
  ],
  controllers: [AuthController],
  providers: [UsersService, UsersRepository, AuthService, GoogleStrategy],
  exports: [AuthService],
})
export class AuthModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Activity } from '@modules/activities/activity.entity';
import { ActivityController } from './activity.controller';
import { ActivityService } from '@modules/activities/activity.service';
import { ActivityRepository } from '@modules/activities/activity.repository';
import { Users } from '@modules/Users/users.entity';
import { MailService } from '@modules/mail/mail.service';
import { Credentials } from '@modules/credentials/credentials.entity';
import { AuthModule } from '@modules/auth/auth.module';
import { Category } from '@modules/categories/category.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Activity, Users, Credentials, Category]),
    AuthModule,
  ],
  controllers: [ActivityController],
  providers: [ActivityService, ActivityRepository, MailService],
})
export class ActivityModule {}

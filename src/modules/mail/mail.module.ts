import { forwardRef, Module } from '@nestjs/common';
import { MailService } from '@modules/mail/mail.service';
import { AuthModule } from '@modules/auth/auth.module';

@Module({
  imports: [forwardRef(() => AuthModule)],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from '@modules/stripe/payment.entity';
import { StripeService } from '@modules/stripe/stripe.service';
import { StripeController } from '@modules/stripe/stripe.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Payment])],
  controllers: [StripeController],
  providers: [StripeService],
  exports: [StripeService],
})
export class StripeModule {}

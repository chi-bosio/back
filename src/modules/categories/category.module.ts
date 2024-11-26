import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from '@modules/categories/category.entity';
import { CategoryService } from '@modules/categories/category.service';
import { CategoryController } from '@modules/categories/category.controller';
import { CategoryRepository } from '@modules/categories/category.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  controllers: [CategoryController],
  providers: [CategoryService, CategoryRepository],
  exports: [CategoryService],
})
export class CategoryModule {}

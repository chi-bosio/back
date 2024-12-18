import { Controller, Get } from '@nestjs/common';
import { CategoryService } from '@modules/categories/category.service';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async getCategories() {
    return this.categoryService.getCategories();
  }
}

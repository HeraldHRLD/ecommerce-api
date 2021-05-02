import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {

  @Get(':id/products/:productId')
  getCategory(@Param('id') id: any, @Param('productId') productId: string) {
    return `category ${id} and product ${productId}`;
  }
}

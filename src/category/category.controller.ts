import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CategoryService } from '@/billandgo/category/category.service';
import { CreateCategoryDto } from '@/billandgo/category/dto/create-category.dto';
import { UpdateCategoryDto } from '@/billandgo/category/dto/update-category.dto';

@Controller('api/categories')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {}

    @Get()
    getCategories() {
        return this.categoryService.getCategories();
    }

    @Post()
    createCategory(@Body() createCategoryDto: CreateCategoryDto) {
        return this.categoryService.create(createCategoryDto);
    }

    @Get(':categoryId')
    getCategory(@Param('categoryId') categoryId: string) {
        return this.categoryService.getCategory(categoryId);
    }

    @Put(':categoryId')
    updateCategory(@Param('categoryId') categoryId: string, @Body() updateCategoryDto: UpdateCategoryDto) {
        return this.categoryService.update(categoryId, updateCategoryDto);
    }
}

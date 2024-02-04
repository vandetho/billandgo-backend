import { Injectable } from '@nestjs/common';
import { Category } from '@/billandgo/category/schema/category.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCategoryDto } from '@/billandgo/category/dto/create-category.dto';
import { UpdateCategoryDto } from '@/billandgo/category/dto/update-category.dto';

@Injectable()
export class CategoryService {
    constructor(@InjectModel('Category') private readonly categoryModel: Model<Category>) {}

    async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
        const createdCategory = new this.categoryModel(createCategoryDto);
        return createdCategory.save();
    }

    getCategories() {
        return this.categoryModel.find().exec();
    }

    getCategory(categoryId: string) {
        return this.categoryModel.findById(categoryId).exec();
    }

    getCategoryProducts(categoryId: string) {
        return this.categoryModel.findById(categoryId).populate('products').exec();
    }

    update(categoryId: string, updateCategoryDto: UpdateCategoryDto) {
        return this.categoryModel.findByIdAndUpdate(categoryId, updateCategoryDto, { new: true }).exec();
    }
}

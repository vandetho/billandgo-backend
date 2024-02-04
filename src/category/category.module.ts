import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { StoreModule } from '@/billandgo/store/store.module';
import { CategorySchema } from '@/billandgo/category/schema/category.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Category', schema: CategorySchema }]), StoreModule],
    providers: [CategoryService],
    controllers: [CategoryController],
    exports: [CategoryService],
})
export class CategoryModule {}

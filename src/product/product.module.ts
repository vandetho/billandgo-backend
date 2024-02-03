import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from '@/billandgo/product/schema/product.schema';
import { StoreModule } from '@/billandgo/store/store.module';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]), StoreModule],
    providers: [ProductService],
    controllers: [ProductController],
})
export class ProductModule {}

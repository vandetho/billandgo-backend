import { Injectable } from '@nestjs/common';
import { Product } from '@/billandgo/product/schema/product.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from '@/billandgo/product/dto/create-product.dto';
import { UpdateProductDto } from '@/billandgo/product/dto/update-product.dto';

@Injectable()
export class ProductService {
    constructor(@InjectModel('Product') private readonly productModel: Model<Product>) {}

    getProducts() {
        return this.productModel.find().exec();
    }

    getProduct(productId: string) {
        return this.productModel.findById(productId).exec();
    }

    createProduct(createProductDto: CreateProductDto) {
        return new this.productModel(createProductDto).save();
    }

    updateProduct(productId: string, updateProductDto: UpdateProductDto) {
        return this.productModel.findByIdAndUpdate(productId, updateProductDto, { new: true }).exec();
    }
}

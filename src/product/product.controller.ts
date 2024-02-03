import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UpdateProductDto } from '@/billandgo/product/dto/update-product.dto';
import { ProductService } from '@/billandgo/product/product.service';
import { CreateProductDto } from '@/billandgo/product/dto/create-product.dto';

@Controller('api/products')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Get()
    async getProducts() {
        return await this.productService.getProducts();
    }

    @Post()
    async createProduct(@Body() createProductDto: CreateProductDto) {
        console.log({ createProductDto });
        return await this.productService.createProduct(createProductDto);
    }

    @Get(':productId')
    async getProduct(@Param('productId') productId: string) {
        return await this.productService.getProduct(productId);
    }

    @Put(':productId')
    async updateProduct(@Param('productId') productId: string, @Body() updateProductDto: UpdateProductDto) {
        return await this.productService.updateProduct(productId, updateProductDto);
    }
}

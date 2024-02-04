import * as dotenv from 'dotenv';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StoreModule } from '@/billandgo/store/store.module';
import { ProductModule } from '@/billandgo/product/product.module';
import { AppController } from '@/billandgo/app.controller';
import { AppService } from '@/billandgo/app.service';
import { CategoryModule } from './category/category.module';

const ENV = process.env.NODE_ENV;
dotenv.config({ path: [`.env.${ENV}`, `.env.${ENV}.local`, '.env.local', '.env'] });

@Module({
    imports: [MongooseModule.forRoot(process.env.MONGO_URI), StoreModule, ProductModule, CategoryModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}

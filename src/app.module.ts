import * as dotenv from 'dotenv';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StoreModule } from './store/store.module';
import { MongooseModule } from '@nestjs/mongoose';

const ENV = process.env.NODE_ENV;
dotenv.config({ path: [`.env.${ENV}`, `.env.${ENV}.local`, '.env.local', '.env'] });

@Module({
    imports: [MongooseModule.forRoot(process.env.MONGO_URI), StoreModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { StoreController } from './store.controller';
import { StoreService } from './store.service';
import { MongooseModule } from '@nestjs/mongoose';
import { StoreSchema } from '@/billandgo/store/schema/store.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Store', schema: StoreSchema }])],
    controllers: [StoreController],
    providers: [StoreService],
    exports: [StoreService],
})
export class StoreModule {}

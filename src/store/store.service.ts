import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Store } from './schema/store.schema';
import { Model } from 'mongoose';
import { CreateStoreDto } from '@/billandgo/store/dto/create-store.dto';
import { UpdateStoreDto } from '@/billandgo/store/dto/update-store.dto';

@Injectable()
export class StoreService {
    constructor(
        @InjectModel(Store.name)
        private readonly storeModel: Model<Store>,
    ) {}

    createStore(createStoreDto: CreateStoreDto) {
        const createdStore = new this.storeModel(createStoreDto);
        return createdStore.save();
    }

    async getStores() {
        return await this.storeModel.find().exec();
    }

    async getStore(storeId: string) {
        return await this.storeModel.findById(storeId).exec();
    }

    async updateStore(storeId: string, updateStoreDto: UpdateStoreDto) {
        return await this.storeModel.findByIdAndUpdate(storeId, updateStoreDto, { new: true }).exec();
    }
}

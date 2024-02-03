import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { StoreService } from '@/billandgo/store/store.service';
import { CreateStoreDto } from '@/billandgo/store/dto/create-store.dto';
import { UpdateStoreDto } from '@/billandgo/store/dto/update-store.dto';

@Controller('api/stores')
export class StoreController {
    constructor(private readonly storeService: StoreService) {}

    @Get()
    async getStores() {
        return await this.storeService.getStores();
    }

    @Post()
    async createStore(@Body() createStoreDto: CreateStoreDto) {
        return await this.storeService.createStore(createStoreDto);
    }

    @Get(':storeId')
    async getStore(@Param('storeId') storeId: string) {
        return await this.storeService.getStore(storeId);
    }

    @Put(':storeId')
    async updateStore(@Param('storeId') storeId: string, @Body() updateStoreDto: UpdateStoreDto) {
        return await this.storeService.updateStore(storeId, updateStoreDto);
    }
}

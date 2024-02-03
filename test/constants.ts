import 'dotenv/config';
import { MongooseModule } from '@nestjs/mongoose';
import { StoreModule } from '@/billandgo/store/store.module';

export const database = process.env.MONGO_URI_DEV;

export const imports = [MongooseModule.forRoot(database), StoreModule];

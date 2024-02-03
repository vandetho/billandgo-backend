import * as dotenv from 'dotenv';
import { MongooseModule } from '@nestjs/mongoose';
import { StoreModule } from '@/billandgo/store/store.module';

dotenv.config({ path: ['.env.test', '.env.test.local', '.env.local', '.env'] });

export const database = process.env.MONGO_URI;

export const imports = [MongooseModule.forRoot(database), StoreModule];

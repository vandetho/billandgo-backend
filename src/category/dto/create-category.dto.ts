import { StoreDocument } from '@/billandgo/store/schema/store.schema';

export class CreateCategoryDto {
    name: string;
    store: string | StoreDocument;
}

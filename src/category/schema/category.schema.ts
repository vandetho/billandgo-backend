import { ApiProperty } from '@nestjs/swagger';
import mongoose, { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Store, StoreDocument } from '@/billandgo/store/schema/store.schema';

export type CategoryDocument = HydratedDocument<Category>;

@Schema({
    timestamps: true,
    toJSON: {
        virtuals: true,
        versionKey: false,
        transform: (_, ret) => {
            delete ret._id;
        },
    },
})
export class Category {
    @ApiProperty()
    id: string;

    @ApiProperty()
    @Prop({ required: true })
    name: string;

    @ApiProperty({ type: Store })
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Store', required: true })
    store: StoreDocument;
}

export const CategorySchema = SchemaFactory.createForClass(Category);

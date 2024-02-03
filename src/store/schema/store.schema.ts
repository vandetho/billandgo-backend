import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type StoreDocument = HydratedDocument<Store>;

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
export class Store {
    @ApiProperty()
    id: string;

    @ApiProperty()
    @Prop()
    name: string;
}

export const StoreSchema = SchemaFactory.createForClass(Store);

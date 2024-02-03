import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MediaDocument = HydratedDocument<Media>;

@Schema({
    timestamps: true,
    toJSON: {
        versionKey: false,
        virtuals: true,
        transform: (doc, ret) => {
            delete ret._id;
        },
    },
})
export class Media {
    @Prop()
    filename: string;

    @Prop()
    originalName: string;

    @Prop()
    filesize: number;

    @Prop()
    mimeType: string;
}

export const MediaSchema = SchemaFactory.createForClass(Media);

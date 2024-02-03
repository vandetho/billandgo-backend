import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from '@/tembre/user/schema/user.schema';

export type RatingDocument = HydratedDocument<Rating>;

@Schema({
    timestamps: true,
    toJSON: {
        virtuals: true,
        versionKey: false,
        transform: (doc, ret) => {
            delete ret._id;
        },
    },
})
export class Rating {
    @Prop({ required: true })
    rating: number;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
    user: User;
}

export const RatingSchema = SchemaFactory.createForClass(Rating);

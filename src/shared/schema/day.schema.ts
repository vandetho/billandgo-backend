import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type DayDocument = HydratedDocument<Day>;

@Schema({
    toJSON: {
        virtuals: true,
        versionKey: false,
        transform: (doc, ret) => {
            delete ret._id;
        },
    },
})
export class Day {
    @ApiProperty()
    @Prop()
    active?: boolean;

    @ApiProperty({ type: 'string' })
    @Prop()
    startTime?: string;

    @ApiProperty({ type: 'string' })
    @Prop()
    endTime?: string;
}

export const DaySchema = SchemaFactory.createForClass(Day);

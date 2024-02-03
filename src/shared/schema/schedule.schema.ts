import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Day, DayDocument, DaySchema } from '@/billandgo/shared/schema/day.schema';

export type ScheduleDocument = HydratedDocument<Schedule>;

@Schema({
    toJSON: {
        virtuals: true,
        versionKey: false,
        transform: (_, ret) => {
            delete ret._id;
        },
    },
})
export class Schedule {
    @ApiProperty({ type: Day })
    @Prop({ type: DaySchema, required: false })
    monday: DayDocument;

    @ApiProperty({ type: Day })
    @Prop({ type: DaySchema, required: false })
    tuesday: DayDocument;

    @ApiProperty({ type: Day })
    @Prop({ type: DaySchema, required: false })
    wednesday: DayDocument;

    @ApiProperty({ type: Day })
    @Prop({ type: DaySchema, required: false })
    thursday: DayDocument;

    @ApiProperty({ type: Day })
    @Prop({ type: DaySchema, required: false })
    friday: DayDocument;

    @ApiProperty({ type: Day })
    @Prop({ type: DaySchema, required: false })
    saturday: DayDocument;

    @ApiProperty({ type: Day })
    @Prop({ type: DaySchema, required: false })
    sunday: DayDocument;
}

export const ScheduleSchema = SchemaFactory.createForClass(Schedule);

import { IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateDayDto {
    @IsBoolean()
    @Type(() => () => Boolean)
    active: boolean;
    startTime: string;
    endTime: string;
}

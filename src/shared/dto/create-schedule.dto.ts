import { ApiProperty } from '@nestjs/swagger';
import { CreateDayDto } from '@/billandgo/shared/dto/create-day.dto';

export class CreateScheduleDto {
    @ApiProperty({ required: false })
    monday?: CreateDayDto;

    @ApiProperty({ required: false })
    tuesday?: CreateDayDto;

    @ApiProperty({ required: false })
    wednesday?: CreateDayDto;

    @ApiProperty({ required: false })
    thursday?: CreateDayDto;

    @ApiProperty({ required: false })
    friday?: CreateDayDto;

    @ApiProperty({ required: false })
    saturday?: CreateDayDto;

    @ApiProperty({ required: false })
    sunday?: CreateDayDto;
}

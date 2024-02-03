import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateStoreDto {
    @ApiProperty()
    @IsString()
    name: string;
}

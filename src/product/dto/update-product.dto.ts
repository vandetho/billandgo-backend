import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateProductDto {
    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsNumber()
    @IsPositive()
    @Type(() => Number)
    price: number;

    @ApiProperty()
    @IsString()
    @IsOptional()
    description: string;
}

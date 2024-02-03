import { ApiProperty } from '@nestjs/swagger';

export class CreateMediaDto {
    @ApiProperty()
    filename: string;

    @ApiProperty()
    originalName: string;

    @ApiProperty()
    filesize: number;

    @ApiProperty()
    mimeType: string;
}

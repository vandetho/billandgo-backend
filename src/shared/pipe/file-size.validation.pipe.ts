import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class FileSizeValidationPipe implements PipeTransform {
    transform(value: any, _: ArgumentMetadata) {
        // "value" is an object containing the file's attributes and metadata
        const oneKb = 5000;
        return value.size < oneKb;
    }
}

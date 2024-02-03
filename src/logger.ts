import { format, transports } from 'winston';
import { utilities, WinstonModuleOptions, WinstonModule } from 'nest-winston';
import { LoggerService } from '@nestjs/common';
import 'winston-daily-rotate-file';

export function createLogger(): LoggerService {
    const winstonOptions: WinstonModuleOptions = {
        transports: [
            new transports.Console({
                format: format.combine(format.timestamp(), utilities.format.nestLike()),
                level: 'debug',
            }),
            new transports.DailyRotateFile({
                format: format.combine(format.timestamp(), format.json()),
                datePattern: 'YYYY-MM-DD',
                zippedArchive: false,
                maxFiles: '30d',
                filename: 'logs/%DATE%-errors.log',
                level: 'error',
            }),
            new transports.DailyRotateFile({
                format: format.combine(format.timestamp(), format.json()),
                datePattern: 'YYYY-MM-DD',
                zippedArchive: false, // don't want to zip our logs
                maxFiles: '30d',
                filename: 'logs/%DATE%-warnings.log',
                level: 'warning',
            }),
            new transports.DailyRotateFile({
                format: format.combine(format.timestamp(), format.json()),
                datePattern: 'YYYY-MM-DD',
                zippedArchive: false, // don't want to zip our logs
                maxFiles: '30d',
                filename: 'logs/%DATE%-critical.log',
                level: 'critical',
            }),
            new transports.DailyRotateFile({
                filename: `logs/%DATE%-combined.log`,
                format: format.combine(format.timestamp(), format.json()),
                datePattern: 'YYYY-MM-DD',
                zippedArchive: false,
                maxFiles: '30d',
            }),
        ],
    };

    return WinstonModule.createLogger(winstonOptions);
}

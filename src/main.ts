import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as compression from 'compression';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { json, urlencoded } from 'body-parser';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from '@/billandgo/app.module';
import { createLogger } from '@/billandgo/logger';

const PORT = process.env.PORT || 3000;

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule, {
        logger: process.env.NODE_ENV === 'production' ? createLogger() : ['error', 'warn', 'debug'],
    });

    const config = new DocumentBuilder()
        .setTitle('Bill and Go')
        .setDescription(
            'A marketplace for listing of leisure or extra activities or extra curriculum for kids and teenagers.\n' +
                '\n' +
                'Potential users are parents who want to improve their kid development.\n' +
                '\n',
        )
        .setVersion('1.0')
        .addBearerAuth()
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api/doc', app, document);

    app.enableCors({ origin: '*' });
    app.useGlobalPipes(new ValidationPipe({}));
    app.enableVersioning({ type: VersioningType.URI });
    app.use(urlencoded({ extended: true }));
    app.use(
        json({
            limit: '10mb',
        }),
    );
    app.use(helmet());
    app.use(compression());
    app.use(
        rateLimit({
            windowMs: 5 * 60 * 1000, // 5 minutes
            limit: 1000, // limit each IP to 1000 requests per windowMs
            message: 'Too many requests created from this IP, please try again after 5 minutes',
        }),
    );

    await app.listen(PORT, () => {
        console.log(`🚀 Application running at port ${PORT}`);
    });
}

bootstrap();

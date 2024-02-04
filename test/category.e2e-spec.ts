import { HttpStatus, INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '@/billandgo/app.module';
import { faker } from '@faker-js/faker';
import { CreateCategoryDto } from '@/billandgo/category/dto/create-category.dto';
import { CreateStoreDto } from '@/billandgo/store/dto/create-store.dto';

describe('CategoryController (e2e)', () => {
    let app: INestApplication;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    it('/api/categories (GET) 200 OK', () => {
        return request(app.getHttpServer()).get('/api/categories').expect(HttpStatus.OK);
    });

    const store: CreateStoreDto = {
        name: faker.company.name(),
    };

    let storeId: string;
    it('/api/stores (POST) 201 OK', () => {
        return request(app.getHttpServer())
            .post('/api/stores')
            .send(store)
            .expect(HttpStatus.CREATED)
            .expect(({ body }) => {
                expect(body.id).toBeDefined();
                storeId = body.id;
                expect(body.name).toBe(store.name);
            });
    });

    const category: CreateCategoryDto = {
        name: faker.word.words(),
        store: storeId,
    };
    let categoryId: string;
    it('/api/categories (POST) 201 Created', () => {
        return request(app.getHttpServer())
            .post('/api/categories')
            .send({ ...category, store: storeId })
            .expect(HttpStatus.CREATED)
            .expect(({ body }) => {
                expect(body.id).toBeDefined();
                categoryId = body.id;
                expect(body.name).toBe(category.name);
            });
    });

    it('/api/categories/:categoryId (GET) 404 Not Found', () => {
        return request(app.getHttpServer())
            .get(`/api/categories/${categoryId}`)
            .expect(HttpStatus.OK)
            .expect(({ body }) => {
                expect(body.id).toBeDefined();
                categoryId = body.id;
                expect(body.name).toBe(category.name);
            });
    });
});

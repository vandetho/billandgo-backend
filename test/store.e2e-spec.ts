import { Test, TestingModule } from '@nestjs/testing';
import { imports } from './constants';
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { faker } from '@faker-js/faker';
import { CreateStoreDto } from '@/billandgo/store/dto/create-store.dto';

describe('StoreController (e2e)', () => {
    let app: INestApplication;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports,
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    it('/api/stores (GET) 200 OK', () => {
        return request(app.getHttpServer()).get('/api/stores').expect(HttpStatus.OK);
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

    it('/api/stores/:storeId (GET) 200 OK', () => {
        return request(app.getHttpServer())
            .get(`/api/stores/${storeId}`)
            .expect(HttpStatus.OK)
            .expect(({ body }) => {
                expect(body.id).toBe(storeId);
                expect(body.name).toBe(store.name);
            });
    });
});

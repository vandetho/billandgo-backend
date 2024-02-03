import { faker } from '@faker-js/faker';
import { HttpStatus, INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '@/billandgo/app.module';
import { CreateProductDto } from '@/billandgo/product/dto/create-product.dto';
import { CreateStoreDto } from '@/billandgo/store/dto/create-store.dto';

describe('ProductController (e2e)', () => {
    let app: INestApplication;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    it('/api/products (GET) 200 OK', () => {
        return request(app.getHttpServer()).get('/api/products').expect(HttpStatus.OK);
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

    const product: CreateProductDto = {
        name: faker.commerce.productName(),
        price: Number(faker.commerce.price()),
        description: faker.commerce.productDescription(),
        store: storeId,
    };

    let productId: string;

    it('/api/products (POST) 201 OK', () => {
        return request(app.getHttpServer())
            .post('/api/products')
            .send({ ...product, store: storeId })
            .expect(HttpStatus.CREATED)
            .expect(({ body }) => {
                expect(body.id).toBeDefined();
                productId = body.id;
                expect(body.name).toBe(product.name);
                expect(body.price).toBe(product.price);
                expect(body.description).toBe(product.description);
            });
    });

    it('/api/products/:productId (GET) 200 OK', () => {
        return request(app.getHttpServer())
            .get(`/api/products/${productId}`)
            .expect(HttpStatus.OK)
            .expect(({ body }) => {
                expect(body.id).toBe(productId);
                expect(body.name).toBe(product.name);
                expect(body.price).toBe(product.price);
                expect(body.description).toBe(product.description);
            });
    });

    const newPrice = Number(faker.commerce.price());
    it('/api/products/:productId (PUT) 200 OK', () => {
        return request(app.getHttpServer())
            .put(`/api/products/${productId}`)
            .send({ price: newPrice })
            .expect(HttpStatus.OK)
            .expect(({ body }) => {
                expect(body.id).toBe(productId);
                expect(body.price).toBe(newPrice);
            });
    });

    it('/api/products/:productId (PUT) 400 Bad Request', () => {
        return request(app.getHttpServer())
            .put(`/api/products/${productId}`)
            .send({ price: 'invalid' })
            .expect(HttpStatus.BAD_REQUEST);
    });

    it('/api/products/:productId (PUT) 400 Bad Request', () => {
        return request(app.getHttpServer())
            .put(`/api/products/${productId}`)
            .send({ price: -1 })
            .expect(HttpStatus.BAD_REQUEST);
    });
});

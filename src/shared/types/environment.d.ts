declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: 'development' | 'production' | 'test';
            JWT_SECRET: string;
            JWT_EXPIRES_TIME: number;
            MONGO_URI: string;
            IMAGE_PREFIX: string;
            PORT: number;
            SECRET_KEY: string;
            STORE_IMAGE_FOLDER: string;
            USER_IMAGE_FOLDER: string;
            FRONTEND_URL: string;
        }
    }
}

export {};

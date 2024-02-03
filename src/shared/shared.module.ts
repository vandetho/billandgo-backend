import { Module } from '@nestjs/common';
import { AuthModule } from '@/tembre/auth/auth.module';
import { UserModule } from '@/tembre/user/user.module';

@Module({
    imports: [UserModule, AuthModule],
})
export class SharedModule {}

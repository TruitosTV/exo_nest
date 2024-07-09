import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { jwtConstants } from './constants';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';


@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      secret: jwtConstants.secret
    })
  ],
  providers: [AuthService, AuthService, JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule {}

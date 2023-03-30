import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { LocalStrategy } from './strategy/local.strategy';
import { UsersService } from 'src/users/users.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports: [UsersModule, PassportModule, JwtModule.register({
    secret: process.env.JWT_SECRET,
    signOptions: { expiresIn: '1h' }
  })],
  controllers: [AuthController],
  providers: [AuthService, UsersService, PrismaService, LocalStrategy]
})
export class AuthModule { }

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcrypt';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { UserPayload } from './models/UserPayload';
import { UserToken } from './models/UserToken';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private readonly jwtSevice: JwtService) { }

  login(user: User): UserToken {
    const payload: UserPayload = {
      sub: user.id,
      email: user.email,
  
    };

    const jwtToken = this.jwtSevice.sign(payload)

    return {
      access_token: jwtToken
    }
  }

  async validateUser(email: string, password: string): Promise<any> {

    const user = await this.usersService.findByEmail(email);

    if (user) {
      //verify if the password correspond the hash that is in the DB
      const isPasswordValid = compareSync(password, user.password)

      if (isPasswordValid) {
        return {
          ...user,
          password: undefined
        }

      }
    }

    throw new Error("Email and/or password is incorrect")

  }
}

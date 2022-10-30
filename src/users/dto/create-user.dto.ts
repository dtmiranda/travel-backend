
import { User } from '../entities/user.entity';

export class CreateUserDto extends User{
    
    email: string;
    password: string;
    
}

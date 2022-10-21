
import { User } from '../entities/user.entity';

export class CreateUserDto extends User{
    
    first_name: string;
    last_name: string;
    email: string;
    
}

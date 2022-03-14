import { Injectable } from '@nestjs/common';
import { User } from 'src/user/user.module';

@Injectable()
export class AuthService { //business logic
    
    signin(requestBody:any){
        let userInfo:User=new User();
        if(requestBody.username=="caglar@gmail.com" && requestBody.password=="123456")
        {
            userInfo.isSuccess=true;
            userInfo.id="1";
            userInfo.user="Caglar Cataloglu";
        }
        return userInfo;
    }
}




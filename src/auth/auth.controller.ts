import { Controller, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request } from 'express'

@Controller('auth')
export class AuthController { //handles the request

    constructor(private authService: AuthService){}
        
        @Post('signin')
        signin(@Req() req: Request){
            console.log(req.body)
            return this.authService.signin(req.body)
        }
    
}

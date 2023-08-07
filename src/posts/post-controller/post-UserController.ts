import { Controller, Get } from '@nestjs/common';

@Controller('userlist')
export class PostControllerController {
    userList = [ 
        {id : 1, name: "Nikul Goyani", address: "Bautzen"},
        
        {id : 2, name: "Goyani", address: "Berlin"},
        
        {id : 3, name: "Mehul", address: "Bautzen"}
    ];

    // @Get('post-userlist')
    @Get()
    GetUserList()
    {
        return this.userList;
    }
}

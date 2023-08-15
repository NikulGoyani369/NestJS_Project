import { Controller, Get,Post, Put,Patch,Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller('userlist')
@ApiTags('User List')
export class PostControllerController {
    userList = [ 
        {id : 1, name: "Nikul Goyani", address: "Bautzen"},
        
        {id : 2, name: "Goyani Nikul", address: "Berlin"},
        
        {id : 3, name: "Mehul", address: "Bautzen"},
        
        {id : 4, name: "Mohmod", address: "Pakistan"},
        
        {id : 5, name: "Kabutercasky", address: "Poland"},
        
        {id : 6, name: "Dhonisasky", address: "India"},
        
        {id : 7, name: "Mehulascky", address: "Poland"},
        
        {id : 8, name: "Christian", address: "Görtliz"},
        
        {id : 9, name: "Thony", address: "Berlin"},
        
        {id : 10, name: "Hens", address: "Magdeburg"},
        
        {id : 11, name: "Beni", address: "Bautzen"}
    ];

    // @Get('post-userlist')
    @Get()
    GetUserList()
    {
        return this.userList;
    }

    @Get('User')
        GetUser()
        {
            return this.userList[5];
        }

    // HTTP POST method is used to create a new resource
    @Post('createUserlist')
        CreateUserList()
        {
            return 'This action adds a new Users';
        }

    // HTTP PUT method is used to Update/Replace an existing resource and put does not need a body
        @Put()
        UpdateUserList()
        {
            return 'OK';
        }

    // HTTP PATCH method is used to Update/Modify an existing resource
        @Patch()
        UpdateUser()
        {
            return 'User Info updated';
        }
    
    // HTTP DELETE method is used to Delete an existing resource 
        @Delete()
        DeleteUser()
        {
            return 'Device Deleted';
        }
}

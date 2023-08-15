import { Controller, Get, Put, Post, Patch,Header, Redirect, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';


@Controller('geratelist')
@ApiTags('Gerate List')
export class PostGeraeteController {
    geraeteList  = [ 
        {id : 1, name: "DILA5", address: "Bautzen"},
        
        {id : 2, name: "DILA10", address: "Berlin"},
        
        {id : 3, name: "DECON5", address: "Bautzen"},
        
        {id : 4, name: "DECON12", address: "Bautzen"},
        
        {id : 5, name: "GALA35", address: "Königsbrück"},
        
        {id : 6, name: "CITY", address: "Königsbrück"},
        
        {id : 7, name: "DEDEC", address: "Bautzen"},
        
        {id : 8, name: "GUV", address: "Bautzen"},
        
        {id : 9, name: "TEFI", address: "Königsbrück"},
        
        {id : 10, name: "GAERSCHRANK", address: "Bautzen"},
    ];

    // @Post()
    // // @Header('Cache-Control', 'none')
    // create(): string {
    //     return "This action adds new geraete"
    // }

    

    @Get('device')
        GetGeraet()
        {
            return this.geraeteList[0];
        }

    @Get('devices')
        GetGeraeteList()
        {
            return this.geraeteList;
        }

    // HTTP POST method is used to create a new resource
    @Post('createlist')
        CreateList()
        {
            return 'This action adds a new device';
        }

    // HTTP PUT method is used to Update/Replace an existing resource and put does not need a body
        @Put()
        UpdateList()
        {
            return 'OK';
        }

    // HTTP PATCH method is used to Update/Modify an existing resource
        @Patch()
        UpdateDevice()
        {
            return 'Device updated';
        }
    
    // HTTP DELETE method is used to Delete an existing resource 
        @Delete()
        DeleteDevice()
        {
            return 'Device Deleted';
        }



}

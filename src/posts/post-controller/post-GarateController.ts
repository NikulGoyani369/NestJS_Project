import { Controller, Get, Put, Post, Header, Redirect } from '@nestjs/common';


@Controller('geratelist')
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

    @Put()
    UpdateList()
    {
        return 'OK';
    }
}

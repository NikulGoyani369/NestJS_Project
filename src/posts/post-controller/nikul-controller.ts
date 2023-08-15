import {
    Body,
    Controller,
    Get,
    Inject,
    Param,
    Post,
    Query,
    Req,
    Res,
    UseGuards,
    Headers,
    UseInterceptors,
    Ip
} from '@nestjs/common';
// import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { Logging } from '../loggin';
import { PublicRoute, User } from '../customeRoute';
import { Response } from 'express';
// import { AuthGuard } from './auth.guard';

class ItemDto {
    itemId: string;
    itemName: string;
    itemValue: number;
}

@Controller('nikul')
@UseInterceptors(Logging)
export class NikulController {
    // constructor(@Inject('CUSTOMER_SERVICE') private readonly ms: ClientProxy) {}
    @Get('getName')
    async getName() {
        // return await firstValueFrom(
        //   this.ms.send(CustomerPattern.Company.GetCompanies.ID, <
        //     CustomerPattern.Company.GetCompanies.Args
        //     >{ customerID: req.user.customerID }),
        //   {
        //     defaultValue: undefined
        //   }
        // );

        // const result = await firstValueFrom(
        //     this.ms.send('TestPattern', { id: 1, vorname: 'Richard', nachname: 'Schafranske' })
        // );
        //
        // console.log(result);

        // STRG + /
        await new Promise((f) => setTimeout(f, 5000));

        return {
            result: '',
            vorname: 'Nikul'
        };
    }
    @Get()
    @PublicRoute() // Apply the publicRoute decorator to this route
    getPublicItems() {
        console.warn(`Fetch the public items....................`);
    }

    @Get('private')
    // @UseGuards(AuthGuard)
    getPrivateItems(@User() user: any, @Ip() hostIp: any) {
        const name = {
            name: 'nikulkumar',
            age: '30',
            email: 'blabla@gmail.com'
        }; // Assuming user info is attched to the request
        console.warn(`fetch private items for the authenticated ${JSON.stringify(user)}`);

        return hostIp;
    }

    // Below are the all commonly used parameter decorators in NestJs
    // @Request() or @Req()
    @Get()
    getItems(@Req() request: Request) {
        console.log('Access properties of request objects' + request);
    }

    // @Response() or @Res()
    @Get()
    getItem(@Res() response: Response) {
        console.log('Access properties of request objects' + response);
    }

    //Body() this decorator extracts entire body of request and makes it available as parameter.
    @Post()
    createItem(@Body() item: ItemDto) {
        // Access body of the request as the "item" parameter
        console.log('Access body of the request as the "item" parameter', item);
    }

    // @Query() this decorator extracts query parameters from the URL and makes them available as parameter.
    @Get('category')
    getItemName(@Query('category') category: string) {
        //Access the "category" query parameter
        console.log(`Access the category query parameter ${category}`);
    }

    //@Param() this decorator extracts route parameters from the URL and makes them available as parameter
    @Get(':id')
    getItemById(@Param('id') itemId: string) {
        // Access the "id" route parameter
        console.warn(`Access the id roues parameter using Param ${itemId}`);
    }

    // @Header this decorator provides access to headers to request
    @Get('authorization')
    getDevice(@Headers('authorization') authHeader: string) {
        //Access the "authorization" header
        console.warn(`access the authorization ${authHeader}`);
    }
}

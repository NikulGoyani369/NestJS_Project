import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { map, Observable, tap } from 'rxjs';

@Injectable()
export class Logging implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        console.log('before......');
        const now = Date.now();
        return next.handle().pipe(
            tap(() => {
                console.log(`After... ${Date.now() - now} ms`);
            }),
            map((value) => ({
                statusCode: context.switchToHttp().getResponse().statusCode,
                data: { date: Date.now(), userinfo: value }
            }))
        );
    }
}

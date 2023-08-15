import { SetMetadata, createParamDecorator, ExecutionContext } from '@nestjs/common';

// Custom decorator to mark routes as "public"
export const PublicRoute = () => SetMetadata('isPublic', true);

// Custom decorator to get user information from request

export const User = createParamDecorator((data: unknown, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();

    return request.user;
});

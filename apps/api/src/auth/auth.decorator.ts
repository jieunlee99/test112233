import {createParamDecorator, ExecutionContext, InternalServerErrorException} from '@nestjs/common';

export const GetCurrentUser = createParamDecorator((data, context: ExecutionContext) => {
    const req = context.switchToHttp().getRequest();

    const user = req.user;

    if (!user) {
       throw new InternalServerErrorException('');
    }

    return user;
});

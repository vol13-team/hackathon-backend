import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class RefreshJwtGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    //reqを取得
    const request = context.switchToHttp().getRequest();
    //reqからtokenを取得
    const token = this.extractTokenFromHeader(request);
    //tokenがない場合はエラー
    if (!token) throw new UnauthorizedException();
    //tokenを検証
    try {
      //tokenを検証してpayloadを取得
      const payload = await this.jwtService.verifyAsync(token, {
        secret: process.env.jwtRefreshTokenKey, //refreshTokenの秘密鍵
      });
      request['user'] = payload; //reqにuserを追加
    } catch {
      throw new UnauthorizedException();
    }

    return true;
  }

  private extractTokenFromHeader(request: Request) {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Refresh' ? token : undefined;
  }
}

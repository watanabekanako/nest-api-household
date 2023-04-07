import {
  Injectable,
  ForbiddenException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { Msg, Jwt } from './interfaces/auth.interfaces';
import { SignUpDto } from './dto/signup.dto';
@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
    private readonly config: ConfigService,
  ) {}
  async signUp(dto: SignUpDto): Promise<Msg> {
    // パスワードのハッシュ化
    const hashed = await bcrypt.hash(dto.password, 12);
    try {
      await this.prisma.user.create({
        data: {
          email: dto.email,
          password: hashed,
          name: dto.name,
        },
      });
      return {
        message: 'ok',
      };
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('This email is already taken');
        }
      }
      throw error;
    }
  }
  async login(dto: LoginDto): Promise<any> {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    if (!user)
      throw new HttpException(
        'Eメールアドレスまたはパスワードが間違っています',
        HttpStatus.BAD_REQUEST,
      );
    // パスワードの比較
    const isValid = await bcrypt.compare(dto.password, user.password);
    // パスワードが不一致の場合
    if (!isValid)
      throw new HttpException(
        'Eメールアドレスまたはパスワードが間違っています',
        HttpStatus.BAD_REQUEST,
      );

    // メールアドレスとパスワードが両方とも一致していたら以下の処理
    return this.generateJwt(user.id, user.email);
  }

  // jwtを生成
  async generateJwt(userId: number, email: string): Promise<Jwt> {
    const payload = {
      sub: userId,
      email,
    };
    // secret keyを呼び出す
    const secret = this.config.get('JWT_SECRET');
    const token = await this.jwt.signAsync(payload, {
      expiresIn: '1h',
      secret: secret,
    });
    return {
      accessToken: token,
    };
  }
  // すべてのユーザーの取得
  getAllUser(): Promise<any> {
    return this.prisma.user.findMany();
  }
}

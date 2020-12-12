import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Usuario } from './entities/user.entity';
import { UsuarioController } from './user.controller';
import { UsuarioService } from './user.service';

@Module({
    imports: [TypeOrmModule.forFeature([Usuario])],
    exports: [UsuarioService],
    controllers: [UsuarioController],
    providers: [UsuarioService],
})
export class UsuarioModule { }



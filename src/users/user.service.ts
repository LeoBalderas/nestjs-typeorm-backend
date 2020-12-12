import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';

import { Usuario } from './entities/user.entity';

@Injectable()
export class UsuarioService extends TypeOrmCrudService<Usuario> {
    constructor(
        @InjectRepository(Usuario) readonly repo: Repository<Usuario>,
    ) {
        super(repo);
    }
}




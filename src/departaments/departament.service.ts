import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';

import { Departamento } from './entities/departament.entity';

@Injectable()
export class DepartamentoService extends TypeOrmCrudService<Departamento> {
    constructor(
        @InjectRepository(Departamento) readonly repo: Repository<Departamento>,
    ) {
        super(repo);
    }
}




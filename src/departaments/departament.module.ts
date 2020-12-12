import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DepartamentoController } from './departament.controller';
import { DepartamentoService } from './departament.service';
import { Departamento } from './entities/departament.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Departamento])],
    exports: [DepartamentoService],
    controllers: [DepartamentoController],
    providers: [DepartamentoService],
})
export class DepartamentoModule { }
import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { DepartamentoService } from './departament.service';
import { Departamento } from './entities/departament.entity';

@Crud({
    model: {
        type: Departamento,
    },
    query: {
        join: {
            usuarios: {},
        }
    }
})

@Controller('departamento')
export class DepartamentoController implements CrudController<Departamento> {
    constructor(
        readonly service: DepartamentoService,
    ) {
    }
    get base(): CrudController<Departamento> {
        return this;
    }
}

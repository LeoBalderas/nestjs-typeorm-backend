import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

import { Usuario } from './entities/user.entity';
import { UsuarioService } from './user.service';

@Crud({
    model: {
        type: Usuario,
    },
    query: {
        join: {
            departamento: {},
        }
    }
})

@Controller('usuario')
export class UsuarioController implements CrudController<Usuario> {
    constructor(
        readonly service: UsuarioService,
    ) {
    }
    get base(): CrudController<Usuario> {
        return this;
    }
}

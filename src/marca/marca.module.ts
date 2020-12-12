import { Module } from '@nestjs/common';

import { MarcaController } from './marca.controller';
import { MarcaService } from './marca.service';

// import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        // Creación de la entidad BD
        // TypeOrmModule.forFeature([Marca]),
    ],
    controllers: [MarcaController],
    providers: [MarcaService],
})
export class MarcaModule { }

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreatePostDto } from './dtos/create-post.dto';
import { EditPostDto } from './dtos/edit-post.dto';
import { Marca } from './entities/marca.entity';

@Injectable()
export class MarcaService {
    constructor(
        // Llamada de la entidad
        @InjectRepository(Marca)
        private readonly marcaRepository: Repository<Marca>
    ) { }

    async getMany(): Promise<Marca[]> {
        // Devolución de promesa
        return await this.marcaRepository.find()
    }

    async getOne(id: number) {
        const marca = this.marcaRepository.findOne(id);

        if (!marca) throw new NotFoundException('No se encuentra algo con este id');

        return marca;
    }

    async createOne(dto: CreatePostDto) {
        const marca = this.marcaRepository.create(dto as any);
        return await this.marcaRepository.save(marca);
    }

    async editOne(id: number, dto: EditPostDto) {
        const marca = await this.marcaRepository.findOne(id);

        if (!marca) throw new NotFoundException('Marca no existente');

        const editedMarca = Object.assign(marca, dto);
        return await this.marcaRepository.save(editedMarca);
    }

    async deleteOne(id: number) {
        return await this.marcaRepository.delete(id);
    }
}

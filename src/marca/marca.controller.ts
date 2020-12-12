import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';

import { CreatePostDto } from './dtos/create-post.dto';
import { EditPostDto } from './dtos/edit-post.dto';
import { MarcaService } from './marca.service';

@Controller('marca')
export class MarcaController {

    constructor(private readonly marcaService: MarcaService) {

    }

    // Listado de todas las marcas
    @Get()
    async getMany() {
        const data = await this.marcaService.getMany();
        return {
            message: "Petición correcta",
            data: data
        }
    }

    // Ruta a la espera de un id, función recibe id string y se hace match
    // Se hace un parseo por ser id number
    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number) {
        const data = await this.marcaService.getOne(id);
        return {
            message: "Petición correcta - getOne",
            data: data
        }
    }

    @Post()
    async createOne(
        @Body() dto: CreatePostDto,
    ) {
        const data = await this.marcaService.createOne(dto);
        return {
            message: "Petición correcta - createOne",
            data: data
        }
    }

    @Put(':id')
    editOne(
        @Param('id', ParseIntPipe) id: number,
        @Body() dto: EditPostDto
    ) {

        return this.marcaService.editOne(id, dto);
    }

    @Delete(':id')
    deleteOne(@Param('id', ParseIntPipe) id: number) {
        return this.marcaService.deleteOne(id);
    }
}

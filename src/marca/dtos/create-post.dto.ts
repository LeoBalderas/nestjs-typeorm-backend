import {IsString, IsInt} from 'class-validator';

export class CreatePostDto {
    @IsString()
    Nombre: string;

    @IsString()
    Pais: string;

    @IsString()
    DescripcionCorta: string;

    @IsString()
    DescripcionLarga: string;

}
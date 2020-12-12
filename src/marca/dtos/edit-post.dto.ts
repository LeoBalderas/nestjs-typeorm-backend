import { CreatePostDto } from "./create-post.dto";
import {PartialType} from '@nestjs/mapped-types';

export class EditPostDto extends PartialType(CreatePostDto) {
    // Existe una función llamada OmitType que te ayuda a omitir ciertos campos
    // a la hora de actualizar, en este caso y por el momento no se usará
    
}
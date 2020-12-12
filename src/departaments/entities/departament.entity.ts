import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

import { Usuario } from '../../users/entities/user.entity';

@Entity('departamentos')

export class Departamento {
    @PrimaryGeneratedColumn({
        name: 'id',
        type: 'int',
    })
    id: number;

    @Column({
        name: 'nombre',
        type: 'varchar',
        length: 50,
        nullable: false,
    })
    nombre: string;

    @Column({
        name: 'descripcion',
        type: 'text',
        nullable: false,
    })
    descripcion: string;

    @CreateDateColumn({
        name: 'created_at',
        type: 'timestamp',
    })
    created_at: Date;

    @UpdateDateColumn({
        name: 'updated_at',
        type: 'timestamp',
    })
    updated_at: Date;

    @DeleteDateColumn({
        name: 'deleted_at',
        type: 'timestamp',
    })
    deleted_at: Date;

    @OneToMany(type => Usuario, usuario => usuario.departamento)
    usuarios: Usuario[];
}
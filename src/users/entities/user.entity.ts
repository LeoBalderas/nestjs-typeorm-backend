import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

import { Departamento } from '../../departaments/entities/departament.entity';

@Entity('usuarios')

export class Usuario {
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
        name: 'apellido',
        type: 'varchar',
        length: 50,
        nullable: false,
    })
    apellido: string;

    @Column({
        name: 'direccion',
        type: 'text',
        nullable: false,
    })
    direccion: string;

    @Column({
        name: 'telefono',
        type: 'varchar',
        length: 15,
    })
    telefono: string;

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

    @ManyToOne(type => Departamento, departamento => departamento.usuarios)
    departamento: Departamento;
}


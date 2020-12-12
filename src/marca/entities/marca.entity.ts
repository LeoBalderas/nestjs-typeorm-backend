import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('marcas')
export class Marca {
    @PrimaryGeneratedColumn()
    Cv_Marca: number;

    @Column({ type: 'varchar', length: 50 })
    Nombre!: string;

    @Column({ type: 'varchar', length: 50 })
    Pais!: string;

    @Column({ type: 'text' })
    DescripcionCorta!: string;

    @Column({ type: 'text' })
    DescripcionLarga: string;

    @DeleteDateColumn({ type: 'timestamp' })
    deleted_at: Date;

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updated_at: Date;

}
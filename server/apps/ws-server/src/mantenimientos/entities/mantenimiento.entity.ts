import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('mantenimiento')
@ObjectType()

export class Mantenimiento {
    @PrimaryGeneratedColumn()
    @Field(() => ID, { nullable: true })
    MANTENIMIENTO_ID: number;

    @Column({ default: 0, type: 'int' })
    @Field(() => Number, { nullable: true })
    MANTENIMIENTO_KMAC: number;

    @Column({ default: 0, type: 'int' })
    @Field(() => Number, { nullable: true })
    MANTENIMIENTO_KMPROX: number;

    @Column({ nullable: true, type: 'text' })
    @Field({ nullable: true })
    MANTENIMIENTO_COMENTARIO: string;

    @Column({ type: 'datetime'})
    @Field({ nullable: true })
    FECHA: Date;

    @Column({ default: true, type: 'boolean' })
    @Field(() => Boolean, { nullable: true })
    ESTADO: boolean;

    @Column({ nullable: true, type: 'text' })
    @Field({ nullable: true })
    UNIDADES_PLACA: string;

    @Column({ default: 0, type: 'int' })
    @Field(() => Number, { nullable: true })
    TIPOSMANTE_ID: number;
}

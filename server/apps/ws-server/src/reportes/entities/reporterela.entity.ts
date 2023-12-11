import { ObjectType, Field, Int, ID} from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('reportes')
@ObjectType()
  export class ReporteRela {
    @PrimaryGeneratedColumn()
    @Field(() => ID, { nullable: true })
    REPORTE_ID: number;

    @Column({ default: true, type: 'boolean' })
    @Field(() => Boolean, { nullable: true })
    ESTADO: boolean;

    @Column({ type: 'datetime'})
    @Field({ nullable: true })
    FECHA: Date;

    @Column({ nullable: true, type: 'text' })
    @Field({ nullable: true })
    DESCRIPCION: string;
}

import { InputType, Field, Int } from '@nestjs/graphql';
import { IsNumber, IsString, IsNotEmpty, IsOptional, MaxLength, Max } from 'class-validator';

@InputType()
export class CreateMantenimientoInput {
    @Field(() => Int)
    // @IsNumber()
    @IsNotEmpty()
    // @Max(999999)
    MANTENIMIENTO_KMAC: number;

    @Field(() => Int)
    // @IsNumber()
    @IsNotEmpty()
    // @Max(999999)
    MANTENIMIENTO_KMPROX: number;

    @Field(() => String, { nullable: true })
    @IsString()
    @IsOptional()
    MANTENIMIENTO_COMENTARIO: string;

    @Field(()=>Date)
    @IsNotEmpty()
    FECHA: Date;

    @Field(() => String)
    @IsString()
    @IsNotEmpty()
    // @MaxLength(7)
    UNIDADES_PLACA: string;

    @Field(() => Int)
    // @IsNumber()
    @IsNotEmpty()
    // @Max(99999)
    TIPOSMANTE_ID: number;
}

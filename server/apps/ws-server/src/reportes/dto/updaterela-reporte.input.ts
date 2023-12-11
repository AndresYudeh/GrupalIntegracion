import { CreateReporteRelaInput } from './createrela-reporte.input';
import { InputType, Field, PartialType, ID } from '@nestjs/graphql';
import { IsBoolean, IsOptional } from 'class-validator';

@InputType()
export class UpdateReporteRelaInput extends PartialType(CreateReporteRelaInput) {
    @Field(() => Boolean, { nullable: true })
    @IsBoolean()
    @IsOptional()
    ESTADO?: boolean;
}

import { InputType, Field, PartialType, ID } from '@nestjs/graphql';
import { CreateMantenimientoInput } from './create-mantenimiento.dto';
import { IsBoolean, IsOptional } from 'class-validator';

@InputType()
export class UpdateMantenimientoInput extends PartialType(CreateMantenimientoInput) {
    @Field(() => Boolean, { nullable: true })
    @IsBoolean()
    @IsOptional()
    ESTADO?: boolean;
}


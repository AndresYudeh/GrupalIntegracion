import { InputType, Int, Field, ID } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsPositive } from 'class-validator';


@InputType()
export class CreateReporteRelaInput {

  @Field(()=>Date)
  @IsNotEmpty()
  FECHA: Date;

  @Field(()=>String)
  @IsNotEmpty()
  DESCRIPCION: string;
}

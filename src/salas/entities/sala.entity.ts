import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SalaDocument = Sala & Document;

@Schema()
export class Sala {
  @Prop()
  numero: string;

  @Prop()
  observacao: string;

  @Prop()
  ativo: boolean;
}

export const SalaSchema = SchemaFactory.createForClass(Sala);

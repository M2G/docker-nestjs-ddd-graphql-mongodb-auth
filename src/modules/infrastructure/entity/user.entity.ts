import { Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class UserEntity {
  @Prop({ type: String })
  _id!: MongooseSchema.Types.ObjectId;

  @Prop({ type: String })
  first_name!: string;

  @Prop({ type: String })
  last_name!: string;

  @Prop({ type: String })
  email!: string;

  @Prop({ type: String })
  password!: string;

  @Prop({ type: String })
  created_at!: string;

  @Prop({ type: String })
  modified_at!: boolean;
}

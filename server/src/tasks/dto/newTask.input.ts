import { Field, InputType, Int } from '@nestjs/graphql';
import { Max, MaxLength, Min } from 'class-validator';

@InputType()
export class NewTaskInput {
  @Field()
  @MaxLength(20)
  title: string;

  @Field()
  @MaxLength(100)
  content: string;
}

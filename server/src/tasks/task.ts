import { Field, ID, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class Task {
  @Field((type) => ID)
  id: number;

  @Field()
  title: string;

  @Field()
  content: string;

  @Field()
  createdAt: Date;
}

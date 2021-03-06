import { Arg, Args, ArgsType, Ctx, Field, FieldResolver, Float, ID, InputType, Int, Mutation, ObjectType, Query, Resolver, Root, registerEnumType } from "type-graphql";
import { PostUpdateManyWithoutAuthorInput } from "../inputs/PostUpdateManyWithoutAuthorInput";
import { Role } from "../../enums/Role";

@InputType({
  isAbstract: true,
  description: undefined,
})
export class UserUpdateInput {
  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  id?: string | null;

  @Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  createdAt?: Date | null;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  email?: string | null;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  password?: string | null;

  @Field(_type => String, {
    nullable: true,
    description: undefined
  })
  name?: string | null;

  @Field(_type => Role, {
    nullable: true,
    description: undefined
  })
  role?: keyof typeof Role | null;

  @Field(_type => PostUpdateManyWithoutAuthorInput, {
    nullable: true,
    description: undefined
  })
  posts?: PostUpdateManyWithoutAuthorInput | null;
}

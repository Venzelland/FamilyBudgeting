/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ExpenseTypeWhereInput } from "./ExpenseTypeWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ExpenseTypeListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ExpenseTypeWhereInput,
  })
  @ValidateNested()
  @Type(() => ExpenseTypeWhereInput)
  @IsOptional()
  @Field(() => ExpenseTypeWhereInput, {
    nullable: true,
  })
  every?: ExpenseTypeWhereInput;

  @ApiProperty({
    required: false,
    type: () => ExpenseTypeWhereInput,
  })
  @ValidateNested()
  @Type(() => ExpenseTypeWhereInput)
  @IsOptional()
  @Field(() => ExpenseTypeWhereInput, {
    nullable: true,
  })
  some?: ExpenseTypeWhereInput;

  @ApiProperty({
    required: false,
    type: () => ExpenseTypeWhereInput,
  })
  @ValidateNested()
  @Type(() => ExpenseTypeWhereInput)
  @IsOptional()
  @Field(() => ExpenseTypeWhereInput, {
    nullable: true,
  })
  none?: ExpenseTypeWhereInput;
}
export { ExpenseTypeListRelationFilter as ExpenseTypeListRelationFilter };

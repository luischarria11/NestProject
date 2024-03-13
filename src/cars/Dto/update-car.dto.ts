import { Optional } from "@nestjs/common";
import { IsString, IsUUID, IsOptional } from "class-validator";

export class UpdateCarDto{
    @IsUUID()
    @IsOptional()
    readonly id?:string;
    @IsString()
    @IsOptional()
    readonly brand?:string;
    @IsString()
    @IsOptional()
    readonly model?: string;
}
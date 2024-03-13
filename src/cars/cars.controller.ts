import { Controller, Get, HttpCode, Post, Param, Body, ParseIntPipe, Put, Delete, ParseUUIDPipe} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './Dto/create-car.dto';

@Controller('cars')
export class CarsController {

    constructor(private readonly carService:CarsService){

    }

    @Get()
    findAll(): any{
        return this.carService.findAll();
    }
    @Post()
    @HttpCode(201)
    create(@Body() car: CreateCarDto): any {
        console.log(car);
        return this.carService.create(car);
    }

    @Put()
    update(@Param("id", ParseUUIDPipe) id:string, @Body() body:any): any {
        console.log(body);
        return {id, body};
    }

    @Delete()
    delete(@Param("id", ParseUUIDPipe) id:string): any {
        console.log(id);
        return id;
    }
    @Get("test")
    test(): string {
        return "other route in cars";
    }
    @Get(":id")
    findById(@Param("id", ParseUUIDPipe) id:string): any {
        return this.carService.findOneById(id);
    }
        
}

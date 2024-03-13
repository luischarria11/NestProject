import { Controller, Get, HttpCode, Post, Param, Body, ParseIntPipe, Put, Delete, ParseUUIDPipe, ValidationPipe, UsePipes} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './Dto/create-car.dto';
import { UpdateCarDto } from './Dto/update-car.dto';

@Controller('cars')
@UsePipes(ValidationPipe)
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

    @Put(":id")
    update(@Param("id", ParseUUIDPipe) id:string, @Body() car: UpdateCarDto): Car {
        return this.carService.update(id, car)
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

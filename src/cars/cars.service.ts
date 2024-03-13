import { Injectable, NotFoundException } from '@nestjs/common';
import {v4 as uuid} from 'uuid';
import { CreateCarDto } from './Dto/create-car.dto';

@Injectable()
export class CarsService {
    private cars = [
        {
            id:uuid(),
            brand: 'Toyota',
            model: 'Corolla'
        },
        {
            id:uuid(),
            brand: 'Honda',
            model: 'Civic'
        },
        {
            id:uuid(),
            brand: 'Jeep',
            model: 'Cherokee'
        }
    ];

    create(createCar: CreateCarDto){
        const car: any = {
            id:uuid(),
            ...createCar
        }

        this.cars.push(car)
        return car;
    }

    findAll(): any{
        return this.cars;
    }

    findOneById(id:string): any {
        const car = this.cars.find(car => car.id === +id);
        if(!car)
            throw new NotFoundException(`Car with Id ${id} not found`);
        else
            return car;
        
    }
}

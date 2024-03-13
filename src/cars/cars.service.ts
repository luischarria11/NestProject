import { Injectable, NotFoundException } from '@nestjs/common';
import {v4 as uuid} from 'uuid';
import { CreateCarDto } from './Dto/create-car.dto';
import { UpdateCarDto } from './Dto/update-car.dto';

@Injectable()
export class CarsService {
    private cars: Car[] = [
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

    findAll(): Car[]{
        return this.cars;
    }

    findOneById(id:string): Car {
        const car: Car = this.cars.find(car => car.id === id);
        if(!car)
            throw new NotFoundException(`Car with Id ${id} not found`);
        else
            return car;
        
    }
    update(id: string, carUpdate: UpdateCarDto): Car {
        let car: Car = this.findOneById(id);
        if (carUpdate.id && carUpdate.id != id) {
          throw new NotFoundException(`Car with id ${id} not valid`); 
        }
        car = {
            ...car,
            ...carUpdate
        }
        this.cars = this.cars.map(c => c.id === id ? car : c);
        return car;
      }
}

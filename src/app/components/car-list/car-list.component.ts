import { Component} from '@angular/core';
import {CarService} from '../../services/car.service';
import {Observable} from 'rxjs';
import {CarModel} from '../../models/car.model';
import {DrawerService} from '../../services/drawer.service';


@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss'],
})
export class CarListComponent {
  private cars$: Observable<CarModel[]>;

  constructor(
    private carRepository: CarService,
    private carDrawerService: DrawerService,
  ) {
    this.cars$ = this.carRepository.getAll();
  }

  trackByCar(_, item): string {
    return item.id;
  }

  edit(car: CarModel): void {
    this.carDrawerService.open();
    this.carRepository.edit(car.id);
  }

}

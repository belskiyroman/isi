import { Injectable } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable, Subject} from 'rxjs';
import {ICar} from '../interfaces/car.interface';
import {addCar, updateCar} from '../store/car/car.actions';
import {map} from 'rxjs/operators';
import {CarModel} from '../models/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private editCar$: Subject<ICar>;
  private cars$: Observable<ICar[]>;

  constructor(private store: Store<{ cars: { carList: Array<ICar> } }>) {
    this.editCar$ = new Subject();
    this.cars$ = store.pipe(select('cars', 'carList'));
  }

  getAll(): Observable<CarModel[]> {
    return this.cars$.pipe(
      map((cars: ICar[]) => cars.map(item => new CarModel(item))),
    );
  }

  getById(id: string): Observable<CarModel> {
    return this.cars$.pipe(
      map((cars: ICar[]) => cars.find(item => item.id === id)),
      map((item: ICar) => new CarModel(item)),
    );
  }

  add(model: CarModel): void {
    this.store.dispatch(addCar({ payload: model.serialize() }));
  }

  update(model: CarModel): void {
    this.store.dispatch(updateCar({ payload: model.serialize() }));
  }

  edit(id: string): void {
    this.getById(id).subscribe((car: CarModel) => this.editCar$.next(car));
  }

  onEdit(handler: (v: CarModel) => void) {
    return this.editCar$.subscribe(handler);
  }
}

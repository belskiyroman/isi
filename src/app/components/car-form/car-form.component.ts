import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CarType} from '../../constants/enums';
import {CarService} from '../../services/car.service';
import {CarModel} from '../../models/car.model';
import {DrawerService} from '../../services/drawer.service';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss']
})
export class CarFormComponent {
  private editCar: CarModel;
  private isTrySubmit = false;
  private readonly baseInfo: FormGroup;
  private readonly detailInfo: FormGroup;
  private readonly carForm: FormGroup;
  private readonly types = [
    {title: 'Sedan', value: CarType.Sedan},
    {title: 'Minivan', value: CarType.Minivan},
    {title: 'Bus', value: CarType.Bus},
  ];

  constructor(
    private fb: FormBuilder,
    private carRepository: CarService,
    private drawerService: DrawerService,
  ) {
    this.baseInfo = this.fb.group({
      fullName: [null, Validators.required],
      vehicleID: [null, Validators.required],
    });
    this.detailInfo = this.fb.group({
      model: [null, Validators.required],
      type: [CarType.Sedan, Validators.required],
      year: [null, [
        Validators.required,
        Validators.maxLength(4),
        Validators.max(new Date().getFullYear()),
        Validators.min(new Date().getFullYear() - 20), // a car must not be older than 20 years
      ]],
    });
    this.carForm = this.fb.group({
      baseInfo: this.baseInfo,
      detailInfo: this.detailInfo,
    });

    this.carRepository
      .onEdit((car: CarModel) => {
        this.editCar = car;
        this.baseInfo.setValue({
          fullName: car.fullName,
          vehicleID: car.vehicleID,
        });
        this.detailInfo.setValue({
          model: car.model,
          year: car.year,
          type: car.type,
        });
      });
  }

  onSubmit(): void {
    this.isTrySubmit = true;

    if (!this.carForm.valid) {
      return this.carForm.markAllAsTouched();
    }

    if (this.editCar) {
      this.updateCar();
    } else {
      this.addCar();
    }

    this.onClose();
  }

  addCar(): void {
    const carModel = new CarModel({
      ...this.baseInfo.value,
      ...this.detailInfo.value,
    });

    this.carRepository.add(carModel);
  }

  updateCar(): void {
    const carModel = new CarModel({
      id: this.editCar.id,
      ...this.baseInfo.value,
      ...this.detailInfo.value,
    });

    this.carRepository.update(carModel);
  }

  onClose(): void {
    this.isTrySubmit = false;
    this.carForm.reset();
    this.drawerService.close();
  }
}

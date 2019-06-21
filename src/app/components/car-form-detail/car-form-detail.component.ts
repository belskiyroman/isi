import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {CarType} from '../../constants/enums';

@Component({
  selector: 'app-car-form-detail',
  templateUrl: './car-form-detail.component.html',
  styleUrls: ['./car-form-detail.component.scss']
})
export class CarFormDetailComponent {
  @Input()
  public formGroup: FormGroup;

  @Input()
  public carTypes: { title: string; value: CarType; }[];
}

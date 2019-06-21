import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-car-form-base',
  templateUrl: './car-form-base.component.html',
  styleUrls: ['./car-form-base.component.scss']
})
export class CarFormBaseComponent {
  @Input()
  public formGroup: FormGroup;
}

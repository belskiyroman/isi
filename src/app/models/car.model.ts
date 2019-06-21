import * as uuidv1 from 'uuid/v1';
import {ICar} from '../interfaces/car.interface';
import {Serializable} from '../interfaces/model-common.interface';
import {CarType} from '../constants/enums';

export class CarModel implements ICar, Serializable {
  public readonly id: string;
  public readonly fullName: string;
  public readonly vehicleID: string;
  public readonly model: string;
  public readonly year: string;
  public readonly type: CarType;

  constructor(input: ICar) {
    this.id = input.id || uuidv1();
    this.fullName = input.fullName;
    this.vehicleID = input.vehicleID;
    this.model = input.model;
    this.year = input.year;
    this.type = input.type;
  }

  get typeName(): string {
    return CarType[this.type];
  }

  serialize(): ICar {
    return {
      id: this.id,
      fullName: this.fullName,
      vehicleID: this.vehicleID,
      model: this.model,
      year: this.year,
      type: this.type,
    };
  }
}

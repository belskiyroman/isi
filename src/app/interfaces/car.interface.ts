import {CarType} from '../constants/enums';

export interface ICarBase {
  fullName: string;
  vehicleID: string;
}

export interface ICarDetail {
  model: string;
  year: string;
  type: CarType;
}

export interface ICar extends ICarBase, ICarDetail {
  id?: string;
}

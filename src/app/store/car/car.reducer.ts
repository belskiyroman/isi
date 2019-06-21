import { createReducer, on } from '@ngrx/store';
import {addCar, updateCar} from './car.actions';
import {ICar} from '../../interfaces/car.interface';


export interface State {
  carList: Array<ICar>;
}

export const initialState: State = {
  carList: [],
};

export const carReducer = createReducer(initialState,
  on(addCar, (state, { payload: car }) => ({
    ...state,
    carList: [...state.carList, car],
  })),
  on(updateCar, (state, { payload: car }) => ({
    ...state,
    carList: state.carList.map(item => item.id === car.id ? car : item),
  })),
);

import {createAction, props} from '@ngrx/store';
import {ICar} from '../../interfaces/car.interface';


export const addCar = createAction('[Car] Add Cars', props<{payload: ICar}>());
export const updateCar = createAction('[Car] Update Cars', props<{payload: ICar}>());

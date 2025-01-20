import { createAction, props } from '@ngrx/store';
import { Order } from '../models/order.model';

export const loadOrders = createAction('[Orders] Load Orders');
export const loadOrdersSuccess = createAction(
  '[Orders] Load Orders Success',
  props<{ orders: Order[] }>()
);
export const loadOrdersFailure = createAction(
  '[Orders] Load Orders Failure',
  props<{ error: any }>()
);

export const addOrder = createAction(
  '[Orders] Add Order',
  props<{ order: Order }>()
);
export const addOrderSuccess = createAction(
  '[Orders] Add Order Success',
  props<{ order: Order }>()
);
export const addOrderFailure = createAction(
  '[Orders] Add Order Failure',
  props<{ error: any }>()
);

export const updateOrderStatus = createAction(
  '[Orders] Update Order Status',
  props<{ orderId: string; status: string }>()
);
export const updateOrderStatusSuccess = createAction(
  '[Orders] Update Order Status Success',
  props<{ order: Order }>()
);
export const updateOrderStatusFailure = createAction(
  '[Orders] Update Order Status Failure',
  props<{ error: any }>()
);

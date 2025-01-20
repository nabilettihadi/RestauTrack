import { createReducer, on } from '@ngrx/store';
import { Order } from '../models/order.model';
import * as OrderActions from './order.actions';

export interface OrderState {
  orders: Order[];
  loading: boolean;
  error: any;
}

export const initialState: OrderState = {
  orders: [],
  loading: false,
  error: null
};

export const orderReducer = createReducer(
  initialState,
  
  on(OrderActions.loadOrders, state => ({
    ...state,
    loading: true,
    error: null
  })),
  
  on(OrderActions.loadOrdersSuccess, (state, { orders }) => ({
    ...state,
    orders,
    loading: false
  })),
  
  on(OrderActions.loadOrdersFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),
  
  on(OrderActions.addOrder, state => ({
    ...state,
    loading: true,
    error: null
  })),
  
  on(OrderActions.addOrderSuccess, (state, { order }) => ({
    ...state,
    orders: [...state.orders, order],
    loading: false
  })),
  
  on(OrderActions.addOrderFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),
  
  on(OrderActions.updateOrderStatus, state => ({
    ...state,
    loading: true,
    error: null
  })),
  
  on(OrderActions.updateOrderStatusSuccess, (state, { order }) => ({
    ...state,
    orders: state.orders.map(o => o.id === order.id ? order : o),
    loading: false
  })),
  
  on(OrderActions.updateOrderStatusFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  }))
);

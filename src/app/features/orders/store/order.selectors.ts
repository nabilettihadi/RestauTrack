import { createFeatureSelector, createSelector } from '@ngrx/store';
import { OrderState } from './order.reducer';

export const selectOrderState = createFeatureSelector<OrderState>('orders');

export const selectAllOrders = createSelector(
  selectOrderState,
  (state: OrderState) => state.orders
);

export const selectOrdersLoading = createSelector(
  selectOrderState,
  (state: OrderState) => state.loading
);

export const selectOrdersError = createSelector(
  selectOrderState,
  (state: OrderState) => state.error
);

export const selectOrdersByStatus = (status: string) => createSelector(
  selectAllOrders,
  (orders) => orders.filter(order => order.status === status)
);

export const selectOrderById = (orderId: string) => createSelector(
  selectAllOrders,
  (orders) => orders.find(order => order.id === orderId)
);

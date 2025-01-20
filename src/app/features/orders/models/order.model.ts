export interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
  notes?: string;
}

export interface Order {
  id: string;
  tableNumber: number;
  items: OrderItem[];
  status: 'pending' | 'preparing' | 'ready' | 'served' | 'paid';
  totalAmount: number;
  createdAt: Date;
  updatedAt: Date;
  specialInstructions?: string;
  waiterId?: string;
}

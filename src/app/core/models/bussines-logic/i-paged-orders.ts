import { Order } from './order';
export interface IPagedOrders {
  orders: Order[];
  count: number;
}

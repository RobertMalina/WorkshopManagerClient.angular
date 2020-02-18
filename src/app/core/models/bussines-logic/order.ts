import { Client } from './client';
import { Worker } from './worker';
import { OrderStatus } from './order-status.enum';

export class Order {
  title: string;
  vehicleDescription: string;
  dateRegister: Date;
  dateStart?: Date;
  dateEnd?: Date;
  estimatedTimeInHours?: number;
  spentTime?: number;
  supervisorId?: number;
  supervisor?: Worker;
  client: Client;
  status: OrderStatus;
}

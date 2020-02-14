import { Worker } from './worker';

export class Order {
  title: string;
  vehicleDescription: string;
  registerDate: Date;
  estimatedTime?: number;
  spentTime?: number;
  supervisor?: Worker;
}

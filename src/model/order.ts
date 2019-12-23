interface Order {
  id: number;
  client?: Client;
  supervisorId?: number;
  title: string;
  vehicleDescription: string;
  description?: string;
  dateStart: string;
  dateEnd: string;
  estimatedTime?: number;
  status: number;
  supervisor?: Worker;
  engagedMechanicians: Worker[];
}

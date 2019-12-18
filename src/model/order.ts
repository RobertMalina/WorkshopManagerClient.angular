interface Order {
  Id: number;
  Client?: Client;
  SupervisorId?: number;
  Title: string;
  VehicleDescription?: string;
  Description?: string;
  DateStart: string;
  DateEnd: string;
  EstimatedTime?: number;
  Status: number;
  Archivized: number;
}

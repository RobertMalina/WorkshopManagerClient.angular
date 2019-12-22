import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/services/client-service';

@Component({
  selector: 'app-order-register',
  templateUrl: './order-register.component.html',
  styleUrls: ['./order-register.component.scss']
})
export class OrderRegisterFormComponent implements OnInit {

  order: Order = {
    id: 0,
    title: '',
    dateStart: '',
    dateEnd: '',
    vehicleDescription: '',
    status: 0,
    client: {
      id: null,
      phoneNumber: null,
      firstName: null,
      lastName: null
    }
  };

  foundClient: Client = null;
  isRequiredDataCollected = false;
  clientCheckErrorMsg = '';

  constructor(private clientService: ClientService) {
  }

  ngOnInit() {
  }

  validateModel(): boolean {
    if (!this.order.title) {
      return false;
    }
    if (!this.order.dateStart) {
      return false;
    }
    if (!this.order.client.phoneNumber) {
      return false;
    }
    if (!this.order.vehicleDescription) {
      return false;
    }
    if (!this.order.client.firstName) {
      return false;
    }
    if (!this.order.client.lastName) {
      return false;
    }
    return true;
  }

  onSubmitClick(): void {
    this.clearModel();
  }

  onFindClientByPhoneNumber(typedPhoneNumber: HTMLInputElement): void {
    this.clientCheckErrorMsg = '';
    this.clientService.findClientByPhoneNumber(typedPhoneNumber.value)
      .subscribe((data: any) => {
        console.log(data);
        if (data.length === 0) {
          console.log(`client with phone number ${typedPhoneNumber.value} not found...`);
          this.foundClient = { id: null, phoneNumber: typedPhoneNumber.value };
          this.order.client = this.foundClient;
          this.clientCheckErrorMsg = 'Nie odnaleziono';
        } else {
          this.foundClient = data[0];
          this.order.client = this.foundClient;
          this.clientCheckErrorMsg = '';
        }
      },
        (err) => {
          this.clientCheckErrorMsg = 'Wystąpił błąd.';
          console.log(err);
        }
      );
  }

  getFoundClientStatusColor(): string {
    if (!this.foundClient) {
      return '';
    }
    if (this.foundClient.id === null) {
      return 'lightgrey';
    }
    if (this.foundClient) {
      return 'lightgreen';
    }
  }

  clearModel(): void {
    this.isRequiredDataCollected = false;
    this.order = {
      id: 0,
      title: '',
      dateStart: '',
      dateEnd: '',
      vehicleDescription: '',
      status: 0,
      client: {
        id: null,
        phoneNumber: null,
        firstName: null,
        lastName: null
      }
    };
  }

  checkData(): void {
    this.isRequiredDataCollected = this.validateModel();
  }
}

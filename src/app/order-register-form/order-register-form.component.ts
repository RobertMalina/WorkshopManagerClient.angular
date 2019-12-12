import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/services/client-service';

@Component({
  selector: 'app-order-register-form',
  templateUrl: './order-register-form.component.html',
  styleUrls: ['./order-register-form.component.scss']
})
export class OrderRegisterFormComponent implements OnInit {

  order: Order = {
    Client: {
      Id: null,
      PhoneNumber: null,
      FirstName: null,
      LastName: null
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
    if (!this.order.DateStart) {
      return false;
    }
    if (!this.order.Client.PhoneNumber) {
      return false;
    }
    if (!this.order.VehicleModel) {
      return false;
    }
    if (!this.order.Client.FirstName) {
      return false;
    }
    if (!this.order.Client.LastName) {
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
      .subscribe((data: Client) => {
        console.log(data);
        if (data) {
          console.log(`client with phone number ${typedPhoneNumber.value} not found...`);
          this.foundClient = { Id: null };
          this.clientCheckErrorMsg = 'Nie odnaleziono';
        } else {
          this.foundClient = data;
          this.order.Client = this.foundClient;
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
    if (this.foundClient === []) {
      return '';
    }
    if (this.foundClient.Id === null) {
      return 'lightgrey';
    }
    if (this.foundClient) {
      return 'lightgreen';
    }
  }

  clearModel(): void {
    this.isRequiredDataCollected = false;
    this.order = {
      Client: {
        Id: null,
        PhoneNumber: null,
        FirstName: null,
        LastName: null
      }
    };
  }

  checkData(): void {
    this.isRequiredDataCollected = this.validateModel();
  }
}

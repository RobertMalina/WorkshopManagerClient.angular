import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/services/client-service';

@Component({
  selector: 'app-order-register',
  templateUrl: './order-register.component.html',
  styleUrls: ['./order-register.component.scss']
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
    if (!this.order.Title) {
      return false;
    }
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
      .subscribe((data: any) => {
        console.log(data);
        if (data.length === 0) {
          console.log(`client with phone number ${typedPhoneNumber.value} not found...`);
          this.foundClient = { Id: null, PhoneNumber: typedPhoneNumber.value };
          this.order.Client = this.foundClient;
          this.clientCheckErrorMsg = 'Nie odnaleziono';
        } else {
          this.foundClient = data[0];
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
    if (!this.foundClient) {
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

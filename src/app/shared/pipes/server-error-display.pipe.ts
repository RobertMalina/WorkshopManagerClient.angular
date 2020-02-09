import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serverErrorDisplay'
})
export class ServerErrorDisplayPipe implements PipeTransform {

  constructor() { }

  transform(error: any): string {
    if (error.status) {
      switch (error.status) {
        case 404:
          return 'Server not found.';
        case error.status % 500 > 100:
          return 'Server error occured.';
        default:
          return 'Unknown error occured.';
      }
    } else {
      return 'Unknown error occured.';
    }
  }
}

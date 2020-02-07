import { AuthService } from './../../core/services/auth.service';
import { AppSectionOption } from './../../core/models/app-section-option';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'optionsAuthFilter'
})
export class OptionsAuthFilterPipe implements PipeTransform {

  constructor(private authService: AuthService) { }

  transform(options: AppSectionOption[], ...args: any[]) {
    return options;
  }
}

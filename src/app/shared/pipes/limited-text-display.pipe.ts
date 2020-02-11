import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitedTextDisplay'
})
export class LimitedTextDisplayPipe implements PipeTransform {

  constructor() { }

  transform(text: string, limit: number): string {
    if (text.length <= limit) {
      return text;
    } else {
      let limitedText: any = text.slice(0, limit).split(' ');
      limitedText = limitedText.slice(0, limitedText.length - 2).join(' ');
      limitedText += '...';
      return limitedText;
    }
  }
}

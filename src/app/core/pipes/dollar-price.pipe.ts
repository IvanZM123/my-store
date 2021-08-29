import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dollarPrice'
})
export class DollarPricePipe implements PipeTransform {
  transform(price: number = 0): string {
    return `$${ price }`;
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { IContact } from '../interfaces/contact';

//export type SortOrder = 'asc' | 'desc';

@Pipe({
  name: 'sortPipe',
  //pure:false
})
export class SortPipePipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(items: IContact[]): IContact[] {
    return items.sort((a, b) => {
        let aLC: string = a.firstName.toLowerCase();
        let bLC: string = b.firstName.toLowerCase();
        return aLC < bLC ? -1 : (aLC > bLC ? 1 : 0);
    });
  }

  // transform(value: any[], sortOrder: SortOrder | string = 'asc', sortKey?: string): any {
  //   sortOrder = sortOrder && (sortOrder.toLowerCase() as any);

  //   if (!value || (sortOrder !== 'asc' && sortOrder !== 'desc')) return value;

  //   let numberArray = [];
  //   let stringArray = [];

  //   if (!sortKey) {
  //     numberArray = value.filter(item => typeof item === 'number').sort();
  //     stringArray = value.filter(item => typeof item === 'string').sort();
  //   } else {
  //     numberArray = value.filter(item => typeof item[sortKey] === 'number').sort((a, b) => a[sortKey] - b[sortKey]);
  //     stringArray = value
  //       .filter(item => typeof item[sortKey] === 'string')
  //       .sort((a, b) => {
  //         if (a[sortKey] < b[sortKey]) return -1;
  //         else if (a[sortKey] > b[sortKey]) return 1;
  //         else return 0;
  //       });
  //   }
  //   const sorted = numberArray.concat(stringArray);
  //   return sortOrder === 'asc' ? sorted : sorted.reverse();
  // }

}

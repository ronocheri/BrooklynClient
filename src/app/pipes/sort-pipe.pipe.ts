import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortPipe'
})
export class SortPipePipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(items: any[]): any[] {
    return items.sort((a, b) => {
        let aLC: string = a.cinema_name.toLowerCase();
        let bLC: string = b.cinema_name.toLowerCase();
        return aLC < bLC ? -1 : (aLC > bLC ? 1 : 0);
    });
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { format } from 'date-fns';

@Pipe({
  name: 'transformDate',
})
export class TransformDatePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    return format(new Date(value), 'hh:mm dd/MM/yyyy');
  }
}

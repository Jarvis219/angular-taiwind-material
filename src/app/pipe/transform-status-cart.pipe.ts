import { Pipe, PipeTransform } from '@angular/core';

export enum statusCart {
  'active' = 'còn hàng',
  'no-active' = 'hết hàng',
}

@Pipe({
  name: 'transformStatusCart',
})
export class TransformStatusCartPipe implements PipeTransform {
  transform(value: 'active' | 'no-active', ...args: unknown[]): unknown {
    return statusCart[value];
  }
}

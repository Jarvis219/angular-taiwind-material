import { Pipe, PipeTransform } from '@angular/core';
import { PaymentMethod } from '../modals/order';

@Pipe({
  name: 'transformPayment',
})
export class TransformPaymentPipe implements PipeTransform {
  transform(value: keyof typeof PaymentMethod, ...args: unknown[]): unknown {
    return PaymentMethod[value];
  }
}

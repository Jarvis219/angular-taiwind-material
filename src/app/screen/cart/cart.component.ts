import { Component, OnInit } from '@angular/core';

import { dataCart } from './data';
import { statusCart } from '../../modals/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public carts = dataCart;
  public status = statusCart;
  public displayModal = false;
  public idProduct: number | undefined;

  constructor() {}

  ngOnInit(): void {}

  openDialog(): void {}

  public changeQuantity(id: number, type: 'plus' | 'except'): void {
    const index = this.carts.findIndex((cart) => cart.id === id);
    if (this.carts[index].quantity === 1) {
      this.handelClickRemove(this.carts[index].id);
      return;
    }
    type === 'plus'
      ? this.carts[index].quantity++
      : this.carts[index].quantity--;
  }

  public removeProduct(): void {
    if (!this.idProduct) return;
    this.carts.splice(
      this.carts.findIndex((cart) => cart.id === this.idProduct),
      1
    );
    this.idProduct = undefined;
    this.displayModal = false;
  }

  public handelClickRemove(id: number): void {
    this.idProduct = id;
    this.displayModal = true;
  }
}

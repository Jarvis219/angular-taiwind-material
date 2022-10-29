import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IOrder } from '../modals/order';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}

  public getOrderDetails(id: string): Observable<IOrder> {
    const url = `${environment.api}/orderDetail/${id}`;
    return this.http.get<IOrder>(url);
  }
}

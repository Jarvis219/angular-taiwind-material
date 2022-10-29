import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { EStatus, IOrder } from 'src/app/modals/order';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  public order: IOrder | undefined;
  public displayDialog: boolean = false;
  public displayBoxChat: boolean = false;
  public titleButton: string = '';
  private id: string = '1';

  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.initData();
      }
    });
  }

  ngOnInit(): void {}

  ngDoCheck(): void {
    if (this.order) {
      for (let i = 0; i < this.order['status-detail'].length; i++) {
        if (this.order['status-detail'][i].status == EStatus.vote) {
          this.titleButton = 'Mua lại';
          break;
        }
        if (this.order['status-detail'][i].status == EStatus.completed) {
          this.titleButton = 'Đánh giá ngay';
          break;
        }
        if (this.order['status-detail'][i].status == EStatus.shipping) {
          this.titleButton = 'Đang giao hàng';
          break;
        }
        if (this.order['status-detail'][i].status == EStatus.pending) {
          this.titleButton = 'Hủy đơn hàng';
          break;
        }
      }
    }
  }

  private initData(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '1';
    this.getOrderDetails();
  }

  private getOrderDetails(): void {
    this.orderService.getOrderDetails(this.id).subscribe((data) => {
      this.order = data;
    });
  }

  public closeDialog(value: boolean): void {
    this.displayDialog = value;
  }

  public closeBoxChat(value: boolean): void {
    this.displayBoxChat = value;
  }
}

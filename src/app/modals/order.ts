export const PaymentMethod = {
  COD: 'Thanh toán khi nhận hàng',
  Zapay: 'Thanh toán qua Zapay',
  Momo: 'Thanh toán qua Momo',
  VNPAY: 'Thanh toán qua VNPAY',
  VISA: 'Thanh toán qua VISA',
  MasterCard: 'Thanh toán qua MasterCard',
  ShopeePay: 'Thanh toán qua ShopeePay',
};

export enum EStatus {
  'pending' = 'pending',
  'pay' = 'pay',
  'confirmed' = 'confirmed',
  'shipping' = 'shipping',
  'completed' = 'completed',
  'cancelled' = 'cancelled',
  'vote' = 'vote',
}

interface IStatusDetails {
  status: EStatus;
  message: string;
  date: string;
}

interface IProduct {
  id: number;
  name: string;
  price: number;
  quantity: number;
  category: string;
  image: string;
}

export interface IOrder {
  id: number;
  'code-orderDetail': string;
  'customer-name': string;
  'customer-phone': string;
  'customer-address': string;
  notes: string;
  'weekend-delivery': boolean;
  'status-detail': IStatusDetails[];
  products: IProduct[];
  total: number;
  'transport-fee': number;
  voucher: number;
  'payment-method': keyof typeof PaymentMethod;
  discount: number;
}

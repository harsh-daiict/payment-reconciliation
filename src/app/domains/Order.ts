import {Payment} from './Payment';

export class Order {
  orderId: string;
  company: string;
  orderDate: string;
  status: string;
  returnId: string;
  deliveryDate: string;
  payments: Array<Payment>;
};

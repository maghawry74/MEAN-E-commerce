import { IProduct } from './Iproduct';
import { Iuser } from './user';

export interface IDBOrder {
  _id?: string;
  user: Iuser;
  Price: Number;
  Products: { Quantity: Number; Product: IProduct }[];
  createdAt: Date;
  updatedAt: Date;
  Delivered: boolean;
}

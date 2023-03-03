import { IProduct } from './Iproduct';
import { Iuser } from './user';

export interface IDBOrder {
  user: Iuser;
  Price: Number;
  Products: { Quantity: Number; Product: IProduct }[];
  createdAt: Date;
  updatedAt: Date;
}

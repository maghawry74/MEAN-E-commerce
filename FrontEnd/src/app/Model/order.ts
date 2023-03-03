export interface IOrder {
  _id?: string;
  Products?: {
    Quantity: number;
    Product?: number;
  }[];
  user: string;
  Price: Number;
}

export interface Iuser {
  _id?: string;
  FirstName: string;
  LastName: string;
  Password: string;
  Email: string;
  Phone: string;
  Address: {
    governorate: string;
    City: string;
  };
}

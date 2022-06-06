import { ICustomer } from 'domain/models/customer';

export interface Customers {
  customers(): Promise<ICustomer[]>;
}

import { ICart } from 'src/app/modals/cart';

export const dataCart: ICart[] = [
  {
    id: 1,
    name: 'Macbook',
    category: 'Laptop',
    price: 24.99,
    quantity: 2,
    color: 'white',
    status: 'active',
  },
  {
    id: 2,
    name: 'iPhone 14 pro max',
    category: 'Phone',
    price: 24.99,
    quantity: 1,
    color: 'purple',
    status: 'no-active',
  },
  {
    id: 3,
    name: 'Samsung',
    category: 'Tablet',
    price: 24.99,
    quantity: 1,
    color: 'black',
    status: 'active',
  },
  {
    id: 4,
    name: 'Nexus 6P',
    category: 'Laptop',
    price: 24.99,
    quantity: 1,
    color: 'gray',
    status: 'active',
  },
];

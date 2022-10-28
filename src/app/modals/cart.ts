export interface ICart {
  id: number;
  name: string;
  category: string;
  price: number;
  quantity: number;
  color: string;
  status: 'active' | 'no-active';
}

export const statusCart = {
  active: 'active',
  'no-active': 'no-active',
};

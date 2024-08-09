// types
import { Order } from './types';

export const orders: Order[] = [
  {
    id: 1,
    items: ['Item 1', 'Item 2', 'Item 3'],
    total: 100,
  },
  {
    id: 2,
    items: ['Item 4', 'Item 5', 'Item 6'],
    total: 200,
  },
  {
    id: 3,
    items: ['Item 7', 'Item 8', 'Item 9'],
    total: 300,
  },
];

export const orderRenderer = (order: Order) => {
  return (
    <div>
      <p>Order ID: {order.id}</p>
      <ul>
        {order.items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <p>Total: {order.total}</p>
    </div>
  );
};
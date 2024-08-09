// components
import ItemList from '../ItemList/ItemList';

// types
import { Order } from './types';

// utils
import { orderRenderer } from './utils';
import { orders } from './utils';

export const ListUseExample: React.FC = () => {
  return (
    <>
      <ItemList items={orders} renderCallback={orderRenderer} />
    </>
  );
};

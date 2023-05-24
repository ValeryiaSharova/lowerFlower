import { Meta, Story } from '@storybook/react/types-6-0';

import {
  CartItems as CartItemsComponent,
  Props,
} from 'src/components/molecules/CartItems';
import { decorators } from 'src/components/providers/StoryBookProvider';

export default {
  title: 'Molecules',
  component: CartItemsComponent,
  decorators,
} as Meta;

export const CartItems: Story<Props> = (args) => (
  <CartItemsComponent {...args} />
);

CartItems.args = {
  items: [
    {
      img: 'https://i.ibb.co/nkc4zHN/image-130.png',
      name: 'рубиновые искры',
      price: 16,
      quantity: 1,
    },
    {
      img: 'https://i.ibb.co/FmctFzN/image-131.png',
      name: 'рубиновые искры',
      price: 20,
      quantity: 2,
    },
  ],
};

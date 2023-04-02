import { Meta, Story } from '@storybook/react/types-6-0';

import { Cart as CartComponent, Props } from 'src/components/molecules/Cart';
import { decorators } from 'src/components/providers/StoryBookProvider';

export default {
  title: 'Molecules',
  component: CartComponent,
  decorators,
} as Meta;

export const Cart: Story<Props> = (args) => <CartComponent {...args} />;

Cart.args = {
  count: 5,
};

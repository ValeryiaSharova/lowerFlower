import { Meta, Story } from '@storybook/react/types-6-0';

import {
  CartMenu as CartMenuComponent,
  Props,
} from 'src/components/organisms/CartMenu';
import { decorators } from 'src/components/providers/StoryBookProvider';

export default {
  title: 'Organisms',
  component: CartMenuComponent,
  decorators,
} as Meta;

export const CartMenu: Story<Props> = (args) => <CartMenuComponent {...args} />;

CartMenu.args = {
  isOpen: true,
};

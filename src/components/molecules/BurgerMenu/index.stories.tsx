import { Meta, Story } from '@storybook/react/types-6-0';

import {
  BurgerMenu as BurgerMenuComponent,
  Props,
} from 'src/components/molecules/BurgerMenu';
import { decorators } from 'src/components/providers/StoryBookProvider';

export default {
  title: 'Molecules',
  component: BurgerMenuComponent,
  decorators,
} as Meta;

export const BurgerMenu: Story<Props> = (args) => (
  <BurgerMenuComponent {...args} />
);

BurgerMenu.args = {
  isOpen: true,
};

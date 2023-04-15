import { Meta, Story } from '@storybook/react/types-6-0';

import {
  MenuLink as MenuLinkComponent,
  Props,
} from 'src/components/atoms/MenuLink';
import { decorators } from 'src/components/providers/StoryBookProvider';

export default {
  title: 'Atoms',
  component: MenuLinkComponent,
  decorators,
} as Meta;

export const MenuLink: Story<Props> = (args) => <MenuLinkComponent {...args} />;

MenuLink.args = {
  text: 'Главная',
  type: 'default',
};

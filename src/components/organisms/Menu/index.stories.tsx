import { Meta, Story } from '@storybook/react/types-6-0';

import { Menu as MenuComponent } from 'src/components/organisms/Menu';
import { decorators } from 'src/components/providers/StoryBookProvider';

export default {
  title: 'Organisms',
  component: MenuComponent,
  decorators,
} as Meta;

export const Menu: Story = () => <MenuComponent />;

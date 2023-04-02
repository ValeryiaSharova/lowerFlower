import { Meta, Story } from '@storybook/react/types-6-0';

import { Header as HeaderComponent } from 'src/components/organisms/Header';
import { decorators } from 'src/components/providers/StoryBookProvider';

export default {
  title: 'Organisms',
  component: HeaderComponent,
  decorators,
} as Meta;

export const Header: Story = () => <HeaderComponent />;

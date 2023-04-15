import { Meta, Story } from '@storybook/react/types-6-0';

import { Arrow as ArrowComponent, Props } from 'src/components/atoms/Arrow';
import { decorators } from 'src/components/providers/StoryBookProvider';

export default {
  title: 'Atoms',
  component: ArrowComponent,
  decorators,
} as Meta;

export const Arrow: Story<Props> = (args) => <ArrowComponent {...args} />;

Arrow.args = {
  color: '#43FFD2',
  size: 'big',
};

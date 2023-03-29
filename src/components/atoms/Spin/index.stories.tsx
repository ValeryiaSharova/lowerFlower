import { Meta, Story } from '@storybook/react/types-6-0';

import { Props, Spin as SpinComponent } from 'src/components/atoms/Spin';
import { decorators } from 'src/components/providers/StoryBookProvider';

export default {
  title: 'Atoms',
  component: SpinComponent,
  decorators,
} as Meta;

export const Spin: Story<Props> = (args) => <SpinComponent {...args} />;

Spin.args = {
  color: 'black',
  size: 30,
};

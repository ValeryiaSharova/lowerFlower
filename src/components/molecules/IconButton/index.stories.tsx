import { Meta, Story } from '@storybook/react/types-6-0';

import {
  IconButton as IconButtonComponent,
  Props,
} from 'src/components/molecules/IconButton';
import { decorators } from 'src/components/providers/StoryBookProvider';

export default {
  title: 'Molecules',
  component: IconButtonComponent,
  decorators,
} as Meta;

export const IconButton: Story<Props> = (args) => (
  <IconButtonComponent {...args} />
);

IconButton.args = {
  color: 'green',
  icon: 'close',
  size: 30,
};

import { Meta, Story } from '@storybook/react/types-6-0';

import {
  BeautyText as BeautyTextComponent,
  Props,
} from 'src/components/atoms/BeautyText';
import { decorators } from 'src/components/providers/StoryBookProvider';

export default {
  title: 'Atoms',
  component: BeautyTextComponent,
  decorators,
} as Meta;

export const BeautyText: Story<Props> = (args) => (
  <BeautyTextComponent {...args} />
);

BeautyText.args = {
  color: 'green',
  text: 'Lover flower',
};

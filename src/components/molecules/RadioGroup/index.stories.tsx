import { Meta, Story } from '@storybook/react/types-6-0';

import {
  Props,
  RadioGroup as RadioGroupComponent,
} from 'src/components/molecules/RadioGroup';
import { decorators } from 'src/components/providers/StoryBookProvider';

export default {
  title: 'Molecules',
  component: RadioGroupComponent,
  decorators,
} as Meta;

export const RadioGroup: Story<Props> = (args) => (
  <RadioGroupComponent {...args} />
);

RadioGroup.args = {
  items: [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
  ],
  title: 'test',
};

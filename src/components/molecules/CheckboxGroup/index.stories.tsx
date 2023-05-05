import { Meta, Story } from '@storybook/react/types-6-0';

import {
  CheckboxGroup as CheckboxGroupComponent,
  Props,
} from 'src/components/molecules/CheckboxGroup';
import { decorators } from 'src/components/providers/StoryBookProvider';

export default {
  title: 'Molecules',
  component: CheckboxGroupComponent,
  decorators,
} as Meta;

export const CheckboxGroup: Story<Props> = (args) => (
  <CheckboxGroupComponent {...args} />
);

CheckboxGroup.args = {
  title: 'По свету',
  checkboxes: ['нежные', 'яркие'],
};

import { Meta, Story } from '@storybook/react/types-6-0';

import {
  Checkbox as CheckboxComponent,
  Props,
} from 'src/components/atoms/Checkbox';
import { decorators } from 'src/components/providers/StoryBookProvider';

export default {
  title: 'Atoms',
  component: CheckboxComponent,
  decorators,
} as Meta;

export const Checkbox: Story<Props> = (args) => <CheckboxComponent {...args} />;

Checkbox.args = {
  label: 'Букеты из гипсофил',
};

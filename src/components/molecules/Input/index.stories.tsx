import { Meta, Story } from '@storybook/react/types-6-0';

import { Input as InputComponent, Props } from 'src/components/molecules/Input';
import { decorators } from 'src/components/providers/StoryBookProvider';

export default {
  title: 'Molecules',
  component: InputComponent,
  decorators,
} as Meta;

export const Input: Story<Props> = (args) => (
  <div style={{ backgroundColor: 'black', padding: '50px' }}>
    <InputComponent {...args} />
  </div>
);

Input.args = {
  label: 'Ваше имя',
  placeholder: 'Введите ваше имя',
  value: '',
};

import { Meta, Story } from '@storybook/react/types-6-0';

import {
  Props,
  TextArea as TextAreaComponent,
} from 'src/components/molecules/TextArea';
import { decorators } from 'src/components/providers/StoryBookProvider';

export default {
  title: 'Molecules',
  component: TextAreaComponent,
  decorators,
} as Meta;

export const TextArea: Story<Props> = (args) => (
  <div style={{ backgroundColor: 'black', padding: '50px' }}>
    <TextAreaComponent {...args} />
  </div>
);

TextArea.args = {
  label: 'Ваше имя',
  placeholder: 'Введите ваше имя',
  value: '',
};

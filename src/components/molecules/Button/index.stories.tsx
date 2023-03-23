import { Meta, Story } from '@storybook/react/types-6-0';

import {
  Button as ButtonComponent,
  Props,
} from 'src/components/molecules/Button';
import { decorators } from 'src/components/providers/StoryBookProvider';

export default {
  title: 'Molecules',
  component: ButtonComponent,
  decorators,
} as Meta;

export const Button: Story<Props> = (args) => <ButtonComponent {...args} />;

Button.args = {
  text: 'смотреть каталог',
  style: 'color',
};

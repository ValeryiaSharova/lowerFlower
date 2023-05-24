import { Meta, Story } from '@storybook/react/types-6-0';

import {
  CountButton as CountButtonComponent,
  Props,
} from 'src/components/molecules/CountButton';
import { decorators } from 'src/components/providers/StoryBookProvider';

export default {
  title: 'Molecules',
  component: CountButtonComponent,
  decorators,
} as Meta;

export const CountButton: Story<Props> = (args) => (
  <CountButtonComponent {...args} />
);

CountButton.args = {
  counter: 4,
  setCounter: () => console.log(),
};

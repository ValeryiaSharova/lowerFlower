import { Meta, Story } from '@storybook/react/types-6-0';

import {
  BigText as BigTextComponent,
  Props,
} from 'src/components/atoms/BigText';
import { decorators } from 'src/components/providers/StoryBookProvider';

export default {
  title: 'Atoms',
  component: BigTextComponent,
  decorators,
} as Meta;

export const BigText: Story<Props> = (args) => <BigTextComponent {...args} />;

BigText.args = {
  floatPosition: 'right',
  text: 'цветы',
};

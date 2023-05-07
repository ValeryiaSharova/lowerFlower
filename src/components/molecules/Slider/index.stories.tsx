import { Meta, Story } from '@storybook/react/types-6-0';

import {
  Props,
  Slider as SliderComponent,
} from 'src/components/molecules/Slider';
import { decorators } from 'src/components/providers/StoryBookProvider';

export default {
  title: 'Molecules',
  component: SliderComponent,
  decorators,
} as Meta;

export const Slider: Story<Props> = (args) => <SliderComponent {...args} />;

Slider.args = {
  description: 'цена',
  maxValue: 500,
  minValue: 25,
  title: 'стоимость',
  unit: 'руб.',
};

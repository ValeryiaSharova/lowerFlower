import { Meta, Story } from '@storybook/react/types-6-0';

import {
  Dimmer as DimmerComponent,
  Props,
} from 'src/components/molecules/Dimmer';
import { decorators } from 'src/components/providers/StoryBookProvider';

export default {
  title: 'Molecules',
  component: DimmerComponent,
  decorators,
} as Meta;

export const Dimmer: Story<Props> = (args) => <DimmerComponent {...args} />;

Dimmer.args = {
  borderRadius: 10,
  children: 'lalala',
  padding: 20,
};

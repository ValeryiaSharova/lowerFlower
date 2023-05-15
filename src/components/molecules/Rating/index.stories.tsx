import { Meta, Story } from '@storybook/react/types-6-0';

import {
  Props,
  Rating as RatingComponent,
} from 'src/components/molecules/Rating';
import { decorators } from 'src/components/providers/StoryBookProvider';

export default {
  title: 'Molecules',
  component: RatingComponent,
  decorators,
} as Meta;

export const Rating: Story<Props> = (args) => <RatingComponent {...args} />;

Rating.args = {
  rate: 3,
};

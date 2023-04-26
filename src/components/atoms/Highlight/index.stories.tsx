import { Meta, Story } from '@storybook/react/types-6-0';

import {
  Highlight as HighlightComponent,
  Props,
} from 'src/components/atoms/Highlight';
import { decorators } from 'src/components/providers/StoryBookProvider';

export default {
  title: 'Atoms',
  component: HighlightComponent,
  decorators,
} as Meta;

export const Highlight: Story<Props> = (args) => (
  <HighlightComponent {...args} />
);

Highlight.args = {
  blur: 125,
  color: 'pink',
  height: 211,
  rotate: -43,
  width: 472,
};

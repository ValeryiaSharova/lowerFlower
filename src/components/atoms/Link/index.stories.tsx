import { Meta, Story } from '@storybook/react/types-6-0';

import { Link as LinkComponent, Props } from 'src/components/atoms/Link';
import { decorators } from 'src/components/providers/StoryBookProvider';

export default {
  title: 'Atoms',
  component: LinkComponent,
  decorators,
} as Meta;

export const Link: Story<Props> = (args) => <LinkComponent {...args} />;

Link.args = {
  color: '#D978AC',
  text: 'test',
};

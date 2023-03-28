import { Meta, Story } from '@storybook/react/types-6-0';

import { Link as LinkComponent, Props } from 'src/components/atoms/Link';
import { decorators } from 'src/components/providers/StoryBookProvider';

export default {
  title: 'Atoms',
  component: LinkComponent,
  decorators,
} as Meta;

export const Link: Story<Props> = (args) => (
  <div style={{ backgroundColor: 'black', padding: '2rem' }}>
    <LinkComponent {...args} />
  </div>
);

Link.args = {
  text: 'Главная',
  type: 'default',
};

import { Meta, Story } from '@storybook/react/types-6-0';

import { Badge as BadgeComponent, Props } from 'src/components/atoms/Badge';
import { decorators } from 'src/components/providers/StoryBookProvider';

export default {
  title: 'Atoms',
  component: BadgeComponent,
  decorators,
} as Meta;

export const Badge: Story<Props> = (args) => <BadgeComponent {...args} />;

Badge.args = {
  type: 'new',
};

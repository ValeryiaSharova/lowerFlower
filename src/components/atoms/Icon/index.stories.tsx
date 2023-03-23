import { Meta, Story } from '@storybook/react/types-6-0';

import { Icon as IconComponent, Props } from 'src/components/atoms/Icon';
import { decorators } from 'src/components/providers/StoryBookProvider';

export default {
  title: 'Atoms',
  component: IconComponent,
  decorators,
} as Meta;

export const Icon: Story<Props> = (args) => <IconComponent {...args} />;

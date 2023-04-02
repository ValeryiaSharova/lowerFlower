import { Meta, Story } from '@storybook/react/types-6-0';

import { Logo as LogoComponent, Props } from 'src/components/atoms/Logo';
import { decorators } from 'src/components/providers/StoryBookProvider';

export default {
  title: 'Atoms',
  component: LogoComponent,
  decorators,
} as Meta;

export const Logo: Story<Props> = (args) => <LogoComponent {...args} />;

Logo.args = {
  logo: 'logo',
  size: 'l',
};

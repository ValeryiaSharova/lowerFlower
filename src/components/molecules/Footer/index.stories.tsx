import { Meta, Story } from '@storybook/react/types-6-0';

import { Footer as FooterComponent } from 'src/components/molecules/Footer';
import { decorators } from 'src/components/providers/StoryBookProvider';

export default {
  title: 'Molecules',
  component: FooterComponent,
  decorators,
} as Meta;

export const Footer: Story = () => <FooterComponent />;

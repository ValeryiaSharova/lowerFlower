import { Meta, Story } from '@storybook/react/types-6-0';

import { ContactInfo as ContactInfoComponent } from 'src/components/atoms/ContactInfo';
import { decorators } from 'src/components/providers/StoryBookProvider';

export default {
  title: 'Atoms',
  component: ContactInfoComponent,
  decorators,
} as Meta;

export const ContactInfo: Story = () => <ContactInfoComponent />;

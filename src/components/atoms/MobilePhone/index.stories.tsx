import { Meta, Story } from '@storybook/react/types-6-0';

import {
  MobilePhone as MobilePhoneComponent,
  Props,
} from 'src/components/atoms/MobilePhone';
import { decorators } from 'src/components/providers/StoryBookProvider';

export default {
  title: 'Atoms',
  component: MobilePhoneComponent,
  decorators,
} as Meta;

export const MobilePhone: Story<Props> = (args) => (
  <MobilePhoneComponent {...args} />
);

MobilePhone.args = {
  isIcon: true,
  phone: '+375 (29) 113-69-69',
};

import { Meta, Story } from '@storybook/react/types-6-0';

import { Props, Title as TitleComponent } from 'src/components/atoms/Title';
import { decorators } from 'src/components/providers/StoryBookProvider';

export default {
  title: 'Atoms',
  component: TitleComponent,
  decorators,
} as Meta;

export const Title: Story<Props> = (args) => <TitleComponent {...args} />;

Title.args = {
  title: 'test',
};

import { Meta, Story } from '@storybook/react/types-6-0';

import { Props, Tabs as TabsComponent } from 'src/components/molecules/Tabs';
import { decorators } from 'src/components/providers/StoryBookProvider';

export default {
  title: 'Molecules',
  component: TabsComponent,
  decorators,
} as Meta;

export const Tabs: Story<Props> = (args) => <TabsComponent {...args} />;

Tabs.args = {
  title: [{ text: 'доставка и оплата' }, { text: 'отзывы' }],
  content: [<>доставка и оплата</>, <>отзывы</>],
};

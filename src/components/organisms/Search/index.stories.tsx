import { Meta, Story } from '@storybook/react/types-6-0';

import { Search as SearchComponent } from 'src/components/organisms/Search';
import { decorators } from 'src/components/providers/StoryBookProvider';

export default {
  title: 'Organisms',
  component: SearchComponent,
  decorators,
} as Meta;

export const Search: Story = () => <SearchComponent />;

import { Meta, Story } from '@storybook/react/types-6-0';

import {
  Props,
  Search as SearchComponent,
} from 'src/components/organisms/Search';
import { decorators } from 'src/components/providers/StoryBookProvider';

export default {
  title: 'Organisms',
  component: SearchComponent,
  decorators,
} as Meta;

export const Search: Story<Props> = (args) => <SearchComponent {...args} />;

Search.args = {
  isVisible: false,
  setIsVisible: (flag: boolean) => console.log(flag),
};

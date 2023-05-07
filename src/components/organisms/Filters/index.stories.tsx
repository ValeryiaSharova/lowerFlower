import { Meta, Story } from '@storybook/react/types-6-0';

import {
  Filters as FiltersComponent,
  Props,
} from 'src/components/organisms/Filters';
import { listOfCategories } from 'src/components/pages/Catalog/data';
import { decorators } from 'src/components/providers/StoryBookProvider';

export default {
  title: 'Organisms',
  component: FiltersComponent,
  decorators,
} as Meta;

export const Filters: Story<Props> = (args) => <FiltersComponent {...args} />;

Filters.args = {
  listOfItems: listOfCategories,
};

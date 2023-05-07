import { Meta, Story } from '@storybook/react/types-6-0';

import {
  Categories as CategoriesComponent,
  Props,
} from 'src/components/organisms/Categories';
import { categories } from 'src/components/pages/Catalog/data';
import { decorators } from 'src/components/providers/StoryBookProvider';

export default {
  title: 'Organisms',
  component: CategoriesComponent,
  decorators,
} as Meta;

export const Categories: Story<Props> = (args) => (
  <CategoriesComponent {...args} />
);

Categories.args = {
  listOfCategories: categories,
};

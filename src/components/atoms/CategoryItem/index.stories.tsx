import { Meta, Story } from '@storybook/react/types-6-0';

import {
  CategoryItem as CategoryItemComponent,
  Props,
} from 'src/components/atoms/CategoryItem';
import { decorators } from 'src/components/providers/StoryBookProvider';

export default {
  title: 'Atoms',
  component: CategoryItemComponent,
  decorators,
} as Meta;

export const CategoryItem: Story<Props> = (args) => (
  <CategoryItemComponent {...args} />
);

CategoryItem.args = {
  text: 'Букеты из гипсофил',
};

import { Meta, Story } from '@storybook/react/types-6-0';

import {
  ItemCard as ItemCardComponent,
  Props,
} from 'src/components/molecules/ItemCard';
import { decorators } from 'src/components/providers/StoryBookProvider';

export default {
  title: 'Molecules',
  component: ItemCardComponent,
  decorators,
} as Meta;

export const ItemCard: Story<Props> = (args) => <ItemCardComponent {...args} />;

ItemCard.args = {
  imageSrc: 'https://i.ibb.co/J5x1QBd/image-114.png',
  title: 'лучший день',
  price: 167,
};

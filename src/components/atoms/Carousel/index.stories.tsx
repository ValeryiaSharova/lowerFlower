import { Meta, Story } from '@storybook/react/types-6-0';

import {
  Carousel as CarouselComponent,
  Props,
} from 'src/components/atoms/Carousel';
import { decorators } from 'src/components/providers/StoryBookProvider';

export default {
  title: 'Atoms',
  component: CarouselComponent,
  decorators,
} as Meta;

export const Carousel: Story<Props> = (args) => <CarouselComponent {...args} />;

Carousel.args = {
  itemCardData: [
    {
      imageSrc: 'https://i.ibb.co/bFf2s5T/image-135.png',
      price: 120,
      title: 'лучший день',
    },
    {
      imageSrc: 'https://i.ibb.co/TrwRGC5/image-136.png',
      price: 120,
      title: 'лучший день',
    },
    {
      imageSrc: 'https://i.ibb.co/H78nbWM/image-137.png',
      price: 120,
      title: 'лучший день',
      sale: 110,
      type: 'sale',
    },
  ],
};

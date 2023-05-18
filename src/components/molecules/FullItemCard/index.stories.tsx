import { Meta, Story } from '@storybook/react/types-6-0';

import {
  FullItemCard as FullItemCardComponent,
  Props,
} from 'src/components/molecules/FullItemCard';
import { decorators } from 'src/components/providers/StoryBookProvider';

export default {
  title: 'Molecules',
  component: FullItemCardComponent,
  decorators,
} as Meta;

export const FullItemCard: Story<Props> = (args) => (
  <FullItemCardComponent {...args} />
);

FullItemCard.args = {
  imageSrc: 'https://i.ibb.co/ZhRQGhM/image-132.png',
  price: 120,
  title: 'лучший день',
  sale: 100,
  description:
    'Завораживающая глубина ваших чувств передана огненными красками этого букета',
  compound:
    'Гвоздика (Диантус), Леукодендрон, Леукоспермум (Нутан), Лотос, Роза',
  categories: [
    '8 марта',
    'Букет на 14 февраля',
    'Букет на праздник',
    'Букеты цветов на День рождения',
    'Композиции из цветов',
    'Композиции из цветов в коробке',
  ],
  labels: ['Для начальника', 'Мужские букеты'],
};

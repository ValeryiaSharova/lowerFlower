import { Meta, Story } from '@storybook/react/types-6-0';

import { Menu as MenuComponent, Props } from 'src/components/organisms/Menu';
import { decorators } from 'src/components/providers/StoryBookProvider';

export default {
  title: 'Organisms',
  component: MenuComponent,
  decorators,
} as Meta;

export const Menu: Story<Props> = (args) => <MenuComponent {...args} />;

Menu.args = {
  links: [
    { text: 'Главная' },
    {
      text: 'Каталог',
      items: [
        'Популярное',
        'Сборны букеты',
        'монобукеты',
        'розы',
        'свадебные',
        'Композиции из цветов к коробке',
        'интерьерные композиции',
        'осенние',
        'индивидуальный букет',
        'сухоцветы',
        'горшечные',
        'дополнительно',
      ],
    },
    { text: 'Доставка и оплата' },
    { text: 'О нас' },
    { text: 'Контакты' },
    { text: 'FAQ' },
  ],
};

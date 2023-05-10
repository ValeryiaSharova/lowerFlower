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
    {
      text: 'Каталог',
      items: [
        { text: 'Популярное', link: '/404' },
        { text: 'Сборны букеты', link: '/404' },
        { text: 'монобукеты', link: '/404' },
        { text: 'розы', link: '/404' },
        { text: 'свадебные', link: '/404' },
        { text: 'Композиции из цветов к коробке', link: '/404' },
        { text: 'интерьерные композиции', link: '/404' },
        { text: 'осенние', link: '/404' },
        { text: 'индивидуальный букет', link: '/404' },
        { text: 'сухоцветы', link: '/404' },
        { text: 'горшечные', link: '/404' },
        { text: 'дополнительно', link: '/404' },
      ],
      link: '/catalog',
    },
    { text: 'Доставка и оплата', link: '/delivery' },
    { text: 'О нас', link: '/about' },
    { text: 'Контакты', link: '/contacts' },
    { text: 'FAQ', link: '/faq' },
  ],
};

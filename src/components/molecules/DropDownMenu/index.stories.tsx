import { Meta, Story } from '@storybook/react/types-6-0';

import {
  DropDownMenu as DropDownMenuComponent,
  Props,
} from 'src/components/molecules/DropDownMenu';
import { decorators } from 'src/components/providers/StoryBookProvider';

export default {
  title: 'Molecules',
  component: DropDownMenuComponent,
  decorators,
} as Meta;

export const DropDownMenu: Story<Props> = (args) => (
  <DropDownMenuComponent {...args} />
);

DropDownMenu.args = {
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
};

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
};

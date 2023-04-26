import { Meta, Story } from '@storybook/react/types-6-0';

import { Card as CardComponent, Props } from 'src/components/molecules/Card';
import { decorators } from 'src/components/providers/StoryBookProvider';

export default {
  title: 'Molecules',
  component: CardComponent,
  decorators,
} as Meta;

export const CardContact: Story<Props> = (args) => <CardComponent {...args} />;

CardContact.args = {
  type: 'contact',
  description: 'г. Минск, ул. Тимирязева 67, комн. 112',
  title: 'Адрес',
};

export const CardAdditional: Story<Props> = (args) => (
  <CardComponent {...args} />
);

CardAdditional.args = {
  type: 'additional',
  description:
    'При указании об этом в пожеланиях к букету, мы приложим пакетик удобрения для вас',
  title: 'Удобрения для срезанных цветов',
};

export const CardCatalog: Story<Props> = (args) => <CardComponent {...args} />;

CardCatalog.args = {
  type: 'catalog',
  list: ['букеты', 'для интерьера', 'Композиции'],
  title: 'готовые букеты из сухоцветов',
};

export const CardPayment: Story<Props> = (args) => <CardComponent {...args} />;

CardPayment.args = {
  type: 'payment',
  description:
    'БАНКОВСКОЙ КАРТОЙ ПРИ ОФОРМЛЕНИИ ЗАКАЗА ЧЕРЕЗ САЙТ или по ссылке',
};

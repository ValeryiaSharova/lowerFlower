import { Meta, Story } from '@storybook/react/types-6-0';

import {
  Accordion as AccordionComponent,
  Props,
} from 'src/components/molecules/Accordion';
import { decorators } from 'src/components/providers/StoryBookProvider';

export default {
  title: 'Molecules',
  component: AccordionComponent,
  decorators,
} as Meta;

export const Accordion: Story<Props> = (args) => (
  <AccordionComponent {...args} />
);

Accordion.args = {
  children: 'test',
  title: 'фильтр товаров',
};

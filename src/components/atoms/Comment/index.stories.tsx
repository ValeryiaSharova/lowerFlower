import { Meta, Story } from '@storybook/react/types-6-0';

import {
  Comment as CommentComponent,
  Props,
} from 'src/components/atoms/Comment';
import { decorators } from 'src/components/providers/StoryBookProvider';

export default {
  title: 'Atoms',
  component: CommentComponent,
  decorators,
} as Meta;

export const Comment: Story<Props> = (args) => <CommentComponent {...args} />;

Comment.args = {
  author: 'Иван',
  date: '10/10/2021',
  rate: 4,
  text: 'Лучшая доставка цветов в городе! Быстро доставили, привезли к нужному времени, а сам букет превзошел все ожидания!',
};

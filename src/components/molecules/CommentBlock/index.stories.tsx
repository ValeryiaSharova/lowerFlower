import { Meta, Story } from '@storybook/react/types-6-0';

import {
  CommentBlock as CommentBlockComponent,
  Props,
} from 'src/components/molecules/CommentBlock';
import { decorators } from 'src/components/providers/StoryBookProvider';

export default {
  title: 'Molecules',
  component: CommentBlockComponent,
  decorators,
} as Meta;

export const CommentBlock: Story<Props> = (args) => (
  <CommentBlockComponent {...args} />
);

CommentBlock.args = {
  comments: [
    { author: 'test', date: '10/10/2021', rate: 4, text: 'test' },
    { author: 'test', date: '10/10/2021', rate: 4, text: 'test' },
    { author: 'test', date: '10/10/2021', rate: 4, text: 'test' },
  ],
  nameBouquet: 'Рубиновые искры',
};

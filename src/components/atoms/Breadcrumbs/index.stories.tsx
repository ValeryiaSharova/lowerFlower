import { Meta, Story } from '@storybook/react/types-6-0';
import { BrowserRouter } from 'react-router-dom';

import {
  Breadcrumbs as BreadcrumbsComponent,
  Props,
} from 'src/components/atoms/Breadcrumbs';
import { decorators } from 'src/components/providers/StoryBookProvider';

export default {
  title: 'Atoms',
  component: BreadcrumbsComponent,
  decorators,
} as Meta;

export const Breadcrumbs: Story<Props> = (args) => (
  <BrowserRouter>
    <BreadcrumbsComponent {...args} />
  </BrowserRouter>
);

Breadcrumbs.args = {
  items: [
    { content: 'catalog', link: '/' },
    { content: 'flower', link: '/flower' },
  ],
};

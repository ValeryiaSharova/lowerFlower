import { Meta, Story } from '@storybook/react/types-6-0';

import { Props, Step as StepComponent } from 'src/components/atoms/Step';
import { decorators } from 'src/components/providers/StoryBookProvider';

export default {
  title: 'Atoms',
  component: StepComponent,
  decorators,
} as Meta;

export const Step: Story<Props> = (args) => <StepComponent {...args} />;

Step.args = {
  description: 'Выберите какие цветы или подарки вы хотите купить',
  step: 1,
};

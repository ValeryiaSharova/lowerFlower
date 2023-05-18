import { Meta, Story } from '@storybook/react/types-6-0';

import { ShippingAndPayment as ShippingAndPaymentComponent } from 'src/components/atoms/ShippingAndPayment';
import { decorators } from 'src/components/providers/StoryBookProvider';

export default {
  title: 'Atoms',
  component: ShippingAndPaymentComponent,
  decorators,
} as Meta;

export const ShippingAndPayment: Story = () => <ShippingAndPaymentComponent />;

import React from 'react';

import { Provider } from 'src/components/providers/Provider';

export const App: React.FC = () => (
  <Provider>
    <div data-testid="page">flower-lover</div>
  </Provider>
);

import React, { ReactNode } from 'react';

import 'src/styles/normalize.css';
import 'src/styles/variables.css';

type Props = {
  children: ReactNode;
};

export const Provider: React.FC<Props> = ({ children }) => <>{children}</>;

import React, { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

import 'src/styles/normalize.css';
import 'src/styles/variables.css';

type Props = {
  children: ReactNode;
};

export const Provider: React.FC<Props> = ({ children }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

import React, { ReactNode } from 'react';

import styles from 'src/components/molecules/Dimmer/styles.module.css';

export type Props = {
  children: ReactNode;
  padding?: number;
  borderRadius?: number;
  width?: number | string;
};

export const Dimmer: React.FC<Props> = ({
  children,
  padding,
  borderRadius,
  width = 'fit-content',
}) => (
  <div className={styles.wrapper} style={{ padding, borderRadius, width }}>
    {children}
  </div>
);

import classNames from 'classnames';
import React, { ReactNode } from 'react';

import styles from 'src/components/molecules/Dimmer/styles.module.css';

export type Props = {
  children: ReactNode;
  padding?: number | string;
  borderRadius?: number;
  width?: number | string;
  className?: string;
};

export const Dimmer: React.FC<Props> = ({
  children,
  padding,
  borderRadius,
  width = '100%',
  className,
}) => (
  <div
    className={classNames(styles.wrapper, className)}
    style={{ padding, borderRadius, width }}
  >
    {children}
  </div>
);

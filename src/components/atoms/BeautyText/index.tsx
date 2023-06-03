import classNames from 'classnames';
import React from 'react';

import styles from 'src/components/atoms/BeautyText/styles.module.css';

export type Props = {
  text: string;
  color: 'green' | 'white';
  className?: string;
};

const stylesToColor: Record<Props['color'], string> = {
  green: styles.green,
  white: styles.white,
};

export const BeautyText: React.FC<Props> = ({ text, color, className }) => (
  <div className={classNames(styles.wrapper, stylesToColor[color], className)}>
    {text}
  </div>
);

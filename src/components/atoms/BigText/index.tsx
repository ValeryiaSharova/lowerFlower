import React from 'react';

import styles from 'src/components/atoms/BigText/styles.module.css';

export type Props = {
  floatPosition: 'left' | 'right';
  text: string;
};

export const BigText: React.FC<Props> = ({ floatPosition, text }) => (
  <div className={styles.text} style={{ float: floatPosition }}>
    {text}
  </div>
);

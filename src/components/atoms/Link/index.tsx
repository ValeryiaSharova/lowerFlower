import React from 'react';

import styles from 'src/components/atoms/Link/styles.module.css';

export type Props = {
  color: string;
  text: string;
};

export const Link: React.FC<Props> = ({ color, text }) => (
  <div className={styles.wrapper} style={{ color }}>
    {text}
  </div>
);

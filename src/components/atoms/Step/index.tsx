import React from 'react';

import styles from 'src/components/atoms/Step/styles.module.css';

export type Props = {
  description: string;
  step: number;
};

export const Step: React.FC<Props> = ({ description, step }) => (
  <div className={styles.wrapper}>
    <div className={styles.step}>{step}&nbsp;шаг</div>
    <div className={styles.description}>{description}</div>
  </div>
);

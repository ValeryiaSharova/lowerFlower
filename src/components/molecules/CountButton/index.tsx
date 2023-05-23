import React from 'react';

import styles from 'src/components/molecules/CountButton/styles.module.css';

export type Props = {
  counter: number;
  setCounter?: (count: (c: number) => number) => void;
};

export const CountButton: React.FC<Props> = ({ counter, setCounter }) => (
  <div className={styles.counter}>
    <span
      onClick={() => setCounter?.((prevState: number) => prevState - 1)}
      role="button"
    >
      -
    </span>
    <span>{counter}</span>
    <span
      onClick={() => setCounter?.((prevState) => prevState + 1)}
      role="button"
    >
      +
    </span>
  </div>
);

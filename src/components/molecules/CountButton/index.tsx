import classNames from 'classnames';
import React from 'react';

import styles from 'src/components/molecules/CountButton/styles.module.css';

export type Props = {
  counter: number;
  setCounter?: (count: (c: number) => number) => void;
  size: 'xs' | 'm';
};

const sizeStyle: Record<Props['size'], string> = {
  m: styles.sizeM,
  xs: styles.sizeXS,
};

export const CountButton: React.FC<Props> = ({
  counter,
  setCounter,
  size = 'm',
}) => (
  <div className={classNames(styles.counter, sizeStyle[size])}>
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

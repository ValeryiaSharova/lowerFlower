import classNames from 'classnames';
import React from 'react';

import { Spin } from 'src/components/atoms/Spin';

import styles from 'src/components/molecules/Button/styles.module.css';

export type Props = {
  text: string;
  style: 'color' | 'black';
  onClick?: () => void;
  type?: 'button' | 'reset' | 'submit';
  isSpin?: boolean;
  isDisabled?: boolean;
};

const styleToClass: Record<Props['style'], string> = {
  black: styles.black,
  color: styles.color,
};

export const Button: React.FC<Props> = ({
  text,
  type = 'button',
  onClick,
  style,
  isSpin = false,
  isDisabled = false,
}) => (
  <button
    // eslint-disable-next-line react/button-has-type
    type={type}
    onClick={onClick}
    className={classNames(styles.button, {
      [styleToClass[style]]: !isDisabled,
      [styles.disabled]: isDisabled,
    })}
    disabled={isDisabled}
  >
    <div className={styles.spin}>
      {isSpin && <Spin color={style === 'color' ? 'black' : 'white'} />}
    </div>
    {text}
  </button>
);

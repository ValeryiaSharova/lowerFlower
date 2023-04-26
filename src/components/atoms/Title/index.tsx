import classNames from 'classnames';
import React from 'react';

import styles from 'src/components/atoms/Title/styles.module.css';

export type Props = {
  title: string;
  className?: string;
};

export const Title: React.FC<Props> = ({ title, className }) => (
  <div className={classNames(styles.wrapper, className)}>{title}</div>
);

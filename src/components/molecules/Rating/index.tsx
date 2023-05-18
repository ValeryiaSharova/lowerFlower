import { Rating as RatingMUI } from '@mui/material';
import React, { useState } from 'react';

import { Icon } from 'src/components/atoms/Icon';

import styles from 'src/components/molecules/Rating/styles.module.css';

export type Props = {
  rate: number;
};

export const Rating: React.FC<Props> = ({ rate }) => {
  const [value, setValue] = useState<number | null>(rate);
  return (
    <RatingMUI
      name="simple-controlled"
      value={value}
      onChange={(event, newValue) => {
        event.preventDefault();
        setValue(newValue);
      }}
      icon={<Icon icon="starOutlined" size={24} color="var(--color-yellow)" />}
      className={styles.rating}
    />
  );
};

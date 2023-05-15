import Rating from '@mui/material/Rating';
import React, { useState } from 'react';

import { Icon } from 'src/components/atoms/Icon';

import styles from 'src/components/atoms/Comment/styles.module.css';

export type Props = {
  text: string;
  rate: number;
  author: string;
  date: string;
};

export const Comment: React.FC<Props> = ({ author, date, rate, text }) => {
  const [value, setValue] = useState<number | null>(rate);

  return (
    <div className={styles.wrapper}>
      <div>
        <span className={styles.quote}>“</span>
        <div className={styles.text}>{text}</div>
      </div>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          event.preventDefault();
          setValue(newValue);
        }}
        icon={
          <Icon icon="starOutlined" size={24} color="var(--color-yellow)" />
        }
        className={styles.rating}
      />
      <div className={styles.author}>
        {author}, {date}
      </div>
    </div>
  );
};

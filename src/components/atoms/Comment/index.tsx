import React from 'react';

import { Rating } from 'src/components/molecules/Rating';

import styles from 'src/components/atoms/Comment/styles.module.css';

export type Props = {
  text: string;
  rate: number;
  author: string;
  date: string;
};

export const Comment: React.FC<Props> = ({ author, date, rate, text }) => (
  <div className={styles.wrapper}>
    <div>
      <span className={styles.quote}>“</span>
      <div className={styles.text}>{text}</div>
    </div>
    <Rating rate={rate} />
    <div className={styles.author}>
      {author}, {date}
    </div>
  </div>
);

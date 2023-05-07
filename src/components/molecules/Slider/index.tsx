import { Slider as SliderMUI } from '@mui/material';
import React, { useState } from 'react';

import styles from 'src/components/molecules/Slider/styles.module.css';

export type Props = {
  minValue: number;
  maxValue: number;
  title: string;
  description: string;
  unit: string;
};

export const Slider: React.FC<Props> = ({
  description,
  maxValue,
  minValue,
  title,
  unit,
}) => {
  const [value, setValue] = useState<number[]>([minValue, maxValue]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    event.preventDefault();
    setValue(newValue as number[]);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{title}</div>
      <SliderMUI
        value={value}
        onChange={handleChange}
        min={minValue}
        max={maxValue}
        size="small"
        className={styles.slider}
      />
      <div className={styles.description}>
        {description}: {value[0]} {unit} - {value[1]} {unit}
      </div>
    </div>
  );
};

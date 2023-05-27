import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup as RadioGroupMUI,
} from '@mui/material';
import React from 'react';

import styles from 'src/components/molecules/RadioGroup/styles.module.css';

export type Props = {
  items: { value: string; label: string }[];
  title: string;
};

export const RadioGroup: React.FC<Props> = ({ items, title }) => {
  const [value, setValue] = React.useState(items[0].value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <FormControl className={styles.wrapper}>
      <FormLabel className={styles.title}>{title}</FormLabel>
      <RadioGroupMUI
        value={value}
        onChange={handleChange}
        className={styles.container}
      >
        {items.map((item) => (
          <FormControlLabel
            value={item.value}
            control={<Radio />}
            label={item.label}
            className={styles.label}
          />
        ))}
      </RadioGroupMUI>
    </FormControl>
  );
};

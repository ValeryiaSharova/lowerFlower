import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import classNames from 'classnames';
import React, { ChangeEvent, ReactNode, SyntheticEvent, useState } from 'react';

import { Icon } from 'src/components/atoms/Icon';
import { IconButton } from 'src/components/molecules/IconButton';

import styles from 'src/components/organisms/Search/styles.module.css';

export type Props = {
  setIsVisible: (flag: boolean) => void;
  isVisible: boolean;
};

type InputPropsType = {
  endAdornment?: ReactNode;
  startAdornment?: ReactNode;
};

export const Search: React.FC<Props> = ({ isVisible, setIsVisible }) => {
  const [value, setValue] = useState('');

  const getInputProps = () => {
    const inputProps: InputPropsType = {};

    inputProps.startAdornment = (
      <InputAdornment position="start">
        <Icon icon="search" size={18} color="var(--color-white)" />
      </InputAdornment>
    );

    inputProps.endAdornment = (
      <InputAdornment position="end">
        <IconButton
          icon="close"
          onClick={handleClose}
          color="var(--color-grey2)"
          size={18}
        />
      </InputAdornment>
    );

    return inputProps;
  };

  const onChange = (event: SyntheticEvent) => {
    const { value } = (event as ChangeEvent<HTMLInputElement>).target;
    setValue(value);
  };

  const handleClose = () => {
    if (value) {
      setValue('');
    } else {
      setIsVisible(false);
    }
  };

  const openSearch = () => {
    setIsVisible(true);
  };

  return isVisible ? (
    <div className={styles.wrapper}>
      <TextField
        value={value}
        onChange={onChange}
        variant="standard"
        placeholder="Введите свой запрос"
        fullWidth
        autoFocus
        InputProps={getInputProps()}
        className={classNames(styles.textField, styles.withStartIcon)}
      />
    </div>
  ) : (
    <div className={styles.container} role="button" onClick={openSearch}>
      <Icon color="var(--color-white)" icon="search" size={18} />
      <span className={styles.text}>поиск</span>
    </div>
  );
};

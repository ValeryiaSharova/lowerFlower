import classNames from 'classnames';
import React, { useState } from 'react';

import { Icon } from 'src/components/atoms/Icon';

import styles from 'src/components/molecules/TextArea/styles.module.css';

export type Props = {
  label?: string;
  placeholder: string;
  defaultValue?: string;
  isRequired?: boolean;
  value?: string;
  onChange?: (v: string) => void;
  isDisabled?: boolean;
  isError?: boolean;
  isColor?: boolean;
};

export const TextArea: React.FC<Props> = ({
  label,
  placeholder,
  defaultValue,
  isRequired = false,
  onChange,
  isDisabled = false,
  isError = false,
  isColor = false,
}) => {
  const [value, setValue] = useState(defaultValue ?? '');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(event.target.value);
    setValue(event.target.value);
  };

  return (
    <div className={styles.container}>
      {!isColor && (
        <label
          className={classNames(styles.label, {
            [styles.disabledLabel]: isDisabled,
          })}
        >
          {isRequired ? `${label}*` : label}
        </label>
      )}
      <div className={styles.wrapper}>
        <textarea
          placeholder={placeholder}
          required={isRequired}
          defaultValue={defaultValue}
          value={value}
          onChange={handleChange}
          className={classNames(styles.input, {
            [styles.active]: value?.length,
            [styles.disabledInput]: isDisabled,
            [styles.errorInput]: isError,
            [styles.color]: isColor,
          })}
          disabled={isDisabled}
          rows={4}
        />
        {isError && (
          <Icon icon="exclamationOutlined" size={18} color="var(--color-red)" />
        )}
      </div>
    </div>
  );
};

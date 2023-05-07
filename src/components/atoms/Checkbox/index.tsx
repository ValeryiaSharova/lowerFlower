import React from 'react';

import styles from 'src/components/atoms/Checkbox/styles.module.css';

export type Props = {
  label: string;
};

export const Checkbox: React.FC<Props> = ({ label }) => (
  <>
    <input type="checkbox" className={styles.checkbox} />
    <label className={styles.label}>{label}</label>
  </>
);

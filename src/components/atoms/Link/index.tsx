import React from 'react';
import { Link as LinkRouter } from 'react-router-dom';

import styles from 'src/components/atoms/Link/styles.module.css';

export type Props = {
  color: string;
  text: string;
  src: string;
};

export const Link: React.FC<Props> = ({ color, text, src }) => (
  <LinkRouter className={styles.wrapper} style={{ color }} to={src}>
    {text}
  </LinkRouter>
);

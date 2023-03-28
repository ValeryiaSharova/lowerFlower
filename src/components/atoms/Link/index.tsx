import React from 'react';

import styles from 'src/components/atoms/Link/styles.module.css';

export type Props = {
  type: 'default' | 'footer' | 'color';
  text: string;
};

const stylesTypes: Record<Props['type'], string> = {
  default: styles.default,
  footer: styles.footer,
  color: styles.color,
};

export const Link: React.FC<Props> = ({ type, text }) => (
  <span className={stylesTypes[type]}>{text}</span>
);

import React from 'react';

import * as logos from 'src/components/atoms/Logo/logos';

import styles from 'src/components/atoms/Logo/styles.module.css';

type LogoType = keyof typeof logos;

export type Props = {
  logo: LogoType;
  size: 's' | 'm' | 'l';
};

const stylesForSize: Record<Props['size'], string> = {
  l: styles.sizeL,
  m: styles.sizeM,
  s: styles.sizeS,
};

export const Logo: React.FC<Props> = ({ logo, size }) => {
  const Component = logos[logo];

  return (
    <div className={stylesForSize[size]}>
      <Component />
    </div>
  );
};

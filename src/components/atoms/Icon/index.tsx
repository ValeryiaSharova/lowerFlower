import React from 'react';

import { iconsAnt } from 'src/components/atoms/Icon/icons';

import styles from 'src/components/atoms/Icon/styles.module.css';

type IconType = keyof typeof iconsAnt;
type IconSizeType = 'xs' | 's' | 'm' | 'l';

export type Props = {
  icon?: IconType;
  size?: IconSizeType;
  color?: string;
};

const iconSize: Record<IconSizeType, string> = {
  xs: styles.sizeXS,
  s: styles.sizeS,
  m: styles.sizeM,
  l: styles.sizeL,
};

export const Icon: React.FC<Props> = ({
  icon = 'loadingOutlined',
  size = 'm',
  color = 'var(--color-black)',
}) => {
  const Component = iconsAnt[icon as IconType];

  return <Component className={iconSize[size]} style={{ color }} />;
};

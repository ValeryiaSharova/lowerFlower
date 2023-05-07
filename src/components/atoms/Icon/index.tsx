import React from 'react';

import { iconsAnt } from 'src/components/atoms/Icon/icons';
import * as icons from 'src/components/atoms/Icon/icons';

import styles from 'src/components/atoms/Icon/styles.module.css';

type AntIconType = keyof typeof iconsAnt;
type IconType = keyof typeof icons;

type ExportedIconsType = Exclude<IconType, 'iconsAnt'>;

type IconSizeType = 12 | 16 | 18 | 24 | 30 | 40 | 80;

export type Props = {
  icon: ExportedIconsType | AntIconType;
  size: IconSizeType;
  color?: string;
};

const iconSize: Record<IconSizeType, string> = {
  12: styles.size12,
  16: styles.size16,
  18: styles.size18,
  24: styles.size24,
  30: styles.size30,
  40: styles.size40,
  80: styles.size80,
};

export const Icon: React.FC<Props> = ({
  icon = 'loadingOutlined',
  size = 30,
  color = 'var(--color-black)',
}) => {
  const Component =
    iconsAnt[icon as AntIconType] || icons[icon as ExportedIconsType];

  return (
    <div className={iconSize[size]}>
      <div className={styles.wrapper}>
        <Component
          style={{ color, fill: color }}
          className={styles.wrapperSvg}
        />
      </div>
    </div>
  );
};

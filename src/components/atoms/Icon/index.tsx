import React from 'react';

import { iconsAnt } from 'src/components/atoms/Icon/icons';
import * as icons from 'src/components/atoms/Icon/icons';

import styles from 'src/components/atoms/Icon/styles.module.css';

type AntIconType = keyof typeof iconsAnt;
type IconType = keyof typeof icons;

type ExportedIconsType = Exclude<IconType, 'iconsAnt'>;

type IconSizeType = 18 | 30;

export type Props = {
  icon: ExportedIconsType | AntIconType;
  size: IconSizeType;
  color?: string;
};

const iconSize: Record<IconSizeType, string> = {
  18: styles.size18,
  30: styles.size30,
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

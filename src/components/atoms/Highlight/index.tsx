import React from 'react';

import styles from 'src/components/atoms/Highlight/styles.module.css';

export type Props = {
  width: number;
  height: number;
  radius: number;
  color: 'green' | 'pink';
  rotate: number;
  blur: number;
};

const colorStyles: Record<Props['color'], string> = {
  green: styles.green,
  pink: styles.pink,
};

export const Highlight: React.FC<Props> = ({
  blur,
  color,
  height,
  radius,
  rotate,
  width,
}) => {
  const style: React.CSSProperties = {
    width,
    height,
    borderRadius: radius,
    filter: `blur(${blur}px)`,
    transform: `rotate(${rotate}deg)`,
  };

  return <div className={colorStyles[color]} style={style} />;
};

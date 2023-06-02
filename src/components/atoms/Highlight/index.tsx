import React from 'react';

import styles from 'src/components/atoms/Highlight/styles.module.css';

export type Props = {
  width: number;
  height: number;
  color: 'green' | 'pink' | 'blue' | 'white';
  rotate: number;
  blur: number;
  position?: 'absolute' | 'relative';
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  zIndex?: number;
};

const colorStyles: Record<Props['color'], string> = {
  green: styles.green,
  pink: styles.pink,
  blue: styles.blue,
  white: styles.white,
};

export const Highlight: React.FC<Props> = ({
  blur,
  color,
  height,
  rotate,
  width,
  position = 'relative',
  top,
  left,
  right,
  zIndex,
  bottom,
}) => {
  const style: React.CSSProperties = {
    width,
    height,
    filter: `blur(${blur}px)`,
    transform: `rotate(${rotate}deg)`,
    position,
    top,
    left,
    right,
    bottom,
    zIndex,
  };

  return <div className={colorStyles[color]} style={style} />;
};

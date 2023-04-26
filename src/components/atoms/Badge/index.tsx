import classNames from 'classnames';
import React from 'react';

import styles from 'src/components/atoms/Badge/styles.module.css';

export type Props = {
  type: 'sale' | 'new';
  isAbsolute?: boolean;
  top?: number;
  right?: number;
};

const typeToStyle: Record<Props['type'], string> = {
  new: styles.new,
  sale: styles.sale,
};

export const Badge: React.FC<Props> = ({ type, isAbsolute, right, top }) => (
  <div
    className={classNames(styles.wrapper, typeToStyle[type], {
      [styles.absolute]: isAbsolute,
    })}
    style={{ right, top }}
  >
    {type}
  </div>
);

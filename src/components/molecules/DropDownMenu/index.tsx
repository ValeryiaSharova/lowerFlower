import classNames from 'classnames';
import React from 'react';

import { MenuLink } from 'src/components/atoms/MenuLink';

import styles from 'src/components/molecules/DropDownMenu/styles.module.css';

export type Props = {
  items: string[];
  isAbsolute?: boolean;
};

export const DropDownMenu: React.FC<Props> = ({ items, isAbsolute }) => (
  <div
    className={classNames(styles.wrapper, { [styles.topPadding]: isAbsolute })}
  >
    {items.map((item, index) => (
      <MenuLink key={item + index} text={item} type="default" />
    ))}
  </div>
);

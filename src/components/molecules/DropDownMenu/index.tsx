import classNames from 'classnames';
import React from 'react';

import { MenuLink } from 'src/components/atoms/MenuLink';
import { Props as MenuProps } from 'src/components/organisms/Menu';

import styles from 'src/components/molecules/DropDownMenu/styles.module.css';

export type Props = {
  items: MenuProps['links'];
  isAbsolute?: boolean;
};

export const DropDownMenu: React.FC<Props> = ({ items, isAbsolute }) => (
  <div
    className={classNames(styles.wrapper, { [styles.topPadding]: isAbsolute })}
  >
    {items.map((item) => (
      <MenuLink key={item.link} type="default" {...item} />
    ))}
  </div>
);

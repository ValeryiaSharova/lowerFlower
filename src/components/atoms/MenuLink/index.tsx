import React, { useState } from 'react';

import { DropDownMenu } from 'src/components/molecules/DropDownMenu';

import styles from 'src/components/atoms/MenuLink/styles.module.css';

export type Props = {
  type: 'default' | 'footer' | 'color';
  text: string;
  items?: string[];
  isAbsolute?: boolean;
};

const stylesTypes: Record<Props['type'], string> = {
  default: styles.default,
  footer: styles.footer,
  color: styles.color,
};

export const MenuLink: React.FC<Props> = ({
  type,
  text,
  items,
  isAbsolute,
}) => {
  const [dropDown, setDropDown] = useState(false);

  return items ? (
    <div
      className={styles.wrapper}
      onMouseEnter={() => setDropDown(true)}
      onMouseLeave={() => setDropDown(false)}
      role="menuitem"
    >
      <span className={stylesTypes[type]}>{text}</span>
      {dropDown && <DropDownMenu items={items} isAbsolute={isAbsolute} />}
    </div>
  ) : (
    <span className={stylesTypes[type]}>{text}</span>
  );
};

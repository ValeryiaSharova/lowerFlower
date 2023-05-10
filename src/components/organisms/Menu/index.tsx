import React from 'react';

import {
  MenuLink,
  Props as MenuLinkProps,
} from 'src/components/atoms/MenuLink';

import styles from 'src/components/organisms/Menu/styles.module.css';

export type Props = {
  links: { text: string; items?: MenuLinkProps['items']; link: string }[];
  isAbsolute?: boolean;
};

export const Menu: React.FC<Props> = ({ links, isAbsolute = false }) => (
  <div className={styles.wrapper}>
    {links.map((link, index) => (
      <MenuLink
        key={link.text + index}
        type="default"
        isAbsolute={isAbsolute}
        {...link}
      />
    ))}
  </div>
);

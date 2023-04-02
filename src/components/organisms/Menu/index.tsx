import React from 'react';

import { Link } from 'src/components/atoms/Link';

import styles from 'src/components/organisms/Menu/styles.module.css';

export type Props = {
  links: { text: string; items?: string[] }[];
};

export const Menu: React.FC<Props> = ({ links }) => (
  <div className={styles.wrapper}>
    {links.map((link, index) => (
      <Link
        key={link.text + index}
        type="default"
        text={link.text}
        items={link.items}
      />
    ))}
  </div>
);

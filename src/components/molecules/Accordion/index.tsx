import classNames from 'classnames';
import React, { ReactNode, useState } from 'react';

import { Icon } from 'src/components/atoms/Icon';

import styles from 'src/components/molecules/Accordion/styles.module.css';

export type Props = {
  title: string;
  children: ReactNode;
};

export const Accordion: React.FC<Props> = ({ children, title }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <span
        className={classNames({
          [styles.openTitle]: open,
          [styles.closeTitle]: !open,
        })}
        role="presentation"
        onClick={() => setOpen(!open)}
      >
        {title}
        <Icon
          size={12}
          color={open ? 'var(--color-green)' : 'var(--color-pink)'}
          icon={open ? 'caretUpOutlined' : 'caretDownOutlined'}
        />
      </span>
      <div
        className={classNames({ [styles.open]: open, [styles.close]: !open })}
      >
        {children}
      </div>
    </>
  );
};

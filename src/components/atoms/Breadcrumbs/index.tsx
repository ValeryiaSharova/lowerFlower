import { Breadcrumbs as BreadcrumbsMUI } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import styles from 'src/components/atoms/Breadcrumbs/styles.module.css';

export type Props = {
  items: { content: string; link: string }[];
};

export const Breadcrumbs: React.FC<Props> = ({ items }) => (
  <BreadcrumbsMUI className={styles.separator}>
    {items.map((item) => (
      <Link to={item.link} key={item.link}>
        <span className={styles.link}>{item.content}</span>
      </Link>
    ))}
  </BreadcrumbsMUI>
);

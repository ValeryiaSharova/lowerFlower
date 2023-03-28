import { Link } from 'src/components/atoms/Link';

import styles from 'src/components/organisms/Menu/styles.module.css';

const links = [
  'Главная',
  'Каталог',
  'Доставка и оплата',
  'О нас',
  'Контакты',
  'FAQ',
];

export const Menu = () => (
  <div className={styles.wrapper}>
    {links.map((link, index) => (
      <Link key={link + index} type="default" text={link} />
    ))}
  </div>
);

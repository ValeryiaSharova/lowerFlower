import { Drawer } from '@mui/material';
import React, { useState } from 'react';

import { Icon } from 'src/components/atoms/Icon';
import { Logo } from 'src/components/atoms/Logo';
import { MenuLink } from 'src/components/atoms/MenuLink';
import { MobilePhone } from 'src/components/atoms/MobilePhone';
import { IconButton } from 'src/components/molecules/IconButton';
import { Props as MenuProps } from 'src/components/organisms/Menu';
import { Search } from 'src/components/organisms/Search';

import styles from 'src/components/molecules/BurgerMenu/styles.module.css';

export type Props = {
  isOpen: boolean;
  handleClose: () => void;
};

const links: MenuProps['links'] = [
  { text: 'Главная', link: '/' },
  { text: 'Каталог', link: '/catalog' },
  { text: 'Доставка и оплата', link: '/delivery' },
  { text: 'О нас', link: '/about' },
  { text: 'Контакты', link: '/contacts' },
  { text: 'FAQ', link: '/faq' },
  { text: 'для корпоративных клиентов', link: '/corp' },
];

export const BurgerMenu: React.FC<Props> = ({ isOpen, handleClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Drawer
      anchor="left"
      open={isOpen}
      onClose={handleClose}
      className={styles.wrapper}
    >
      <>
        <div className={styles.logoWrapper}>
          <Logo logo="logo" size="m" />
          <IconButton
            color="var(--color-green)"
            icon="close"
            onClick={handleClose}
            size={18}
          />
        </div>
        <Search isVisible={isVisible} setIsVisible={setIsVisible} />
        {links.map((link, index) => (
          <MenuLink type="default" key={index} {...link} />
        ))}
        <div className={styles.divider} />
        <div className={styles.info}>
          <span className={styles.infoTitle}>zakaz@loverflower.by</span>
          <span className={styles.infoDescription}>
            Доставка 24/7 по договоренности с оператором
          </span>
        </div>
        <div className={styles.info}>
          <span className={styles.infoTitle}>ул. Тимирязева 67</span>
          <span className={styles.infoDescription}>
            10:00 до 21:00 без выходных
          </span>
        </div>
        <div className={styles.confident}>
          <span>Политика конфиденциальности</span>
          <span>Обработка персональных данных</span>
        </div>
        <MobilePhone phone="+375 (29) 113-69-69" size={14} style="underline" />
        <div className={styles.contacts}>
          <Icon icon="instagram" size={24} color="var(--color-green)" />
          <Icon icon="whatsUp" size={24} color="var(--color-green)" />
          <Icon icon="mobile" size={24} color="var(--color-green)" />
        </div>
      </>
    </Drawer>
  );
};

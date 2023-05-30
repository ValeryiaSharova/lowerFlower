import classNames from 'classnames';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Logo } from 'src/components/atoms/Logo';
import { MobilePhone } from 'src/components/atoms/MobilePhone';
import { BurgerMenu } from 'src/components/molecules/BurgerMenu';
import { Cart } from 'src/components/molecules/Cart';
import { Menu } from 'src/components/organisms/Menu';
import { Search } from 'src/components/organisms/Search';

import styles from 'src/components/organisms/Header/styles.module.css';

export type Props = {
  isFixed?: boolean;
  isAbsolute?: boolean;
};

export const Header: React.FC<Props> = ({
  isFixed = false,
  isAbsolute = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={classNames(styles.wrapper, {
        [styles.fixed]: isFixed,
        [styles.absolute]: isAbsolute,
      })}
    >
      <div
        className={styles.burger}
        role="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={styles.burgerItem} />
        <div className={styles.burgerItem} />
        <div className={styles.burgerItem} />
      </div>
      <div className={styles.logo}>
        <Link to="/">
          <Logo logo="logo" size="m" />
        </Link>
      </div>
      <div className={styles.container}>
        <Menu
          links={[
            {
              text: 'Каталог',
              items: [
                { text: 'Популярное', link: '/404' },
                { text: 'Сборны букеты', link: '/404' },
                { text: 'монобукеты', link: '/404' },
                { text: 'розы', link: '/404' },
                { text: 'свадебные', link: '/404' },
                { text: 'Композиции из цветов к коробке', link: '/404' },
                { text: 'интерьерные композиции', link: '/404' },
                { text: 'осенние', link: '/404' },
                { text: 'индивидуальный букет', link: '/404' },
                { text: 'сухоцветы', link: '/404' },
                { text: 'горшечные', link: '/404' },
                { text: 'дополнительно', link: '/404' },
              ],
              link: '/catalog',
            },
            { text: 'Доставка и оплата', link: '/delivery' },
            { text: 'О нас', link: '/about' },
            { text: 'Контакты', link: '/contacts' },
          ]}
          isAbsolute={isAbsolute}
        />
        <div
          className={classNames({
            [styles.innerWrapper]: isFixed,
            [styles.innerFixed]: !isFixed,
          })}
        >
          <Search isVisible={isVisible} setIsVisible={setIsVisible} />
          {!isVisible && isFixed && (
            <MobilePhone
              isIcon
              phone="+375 (29) 113-69-69"
              size={14}
              style="default"
            />
          )}
        </div>
      </div>
      {!isAbsolute && (
        <>
          <div className={styles.text}>lover flower</div> <Cart count={5} />
        </>
      )}

      <BurgerMenu isOpen={isOpen} handleClose={() => setIsOpen(!isOpen)} />
    </div>
  );
};

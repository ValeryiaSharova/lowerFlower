import classNames from 'classnames';
import React, { useState } from 'react';

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
      <div className={styles.logo}>
        <Logo logo="logo" size="m" />
      </div>
      <div className={styles.container}>
        <Menu
          links={[
            {
              text: 'Каталог',
              items: [
                'Популярное',
                'Сборны букеты',
                'монобукеты',
                'розы',
                'свадебные',
                'Композиции из цветов к коробке',
                'интерьерные композиции',
                'осенние',
                'индивидуальный букет',
                'сухоцветы',
                'горшечные',
                'дополнительно',
              ],
            },
            { text: 'Доставка и оплата' },
            { text: 'О нас' },
            { text: 'Контакты' },
            { text: 'FAQ' },
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
        {isFixed && <Cart count={5} />}
      </div>
      <div
        className={styles.burger}
        role="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={styles.burgerItem} />
        <div className={styles.burgerItem} />
        <div className={styles.burgerItem} />
      </div>
      <BurgerMenu isOpen={isOpen} handleClose={() => setIsOpen(!isOpen)} />
    </div>
  );
};

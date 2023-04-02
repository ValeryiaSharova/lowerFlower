import { useState } from 'react';

import { Logo } from 'src/components/atoms/Logo';
import { MobilePhone } from 'src/components/atoms/MobilePhone';
import { Cart } from 'src/components/molecules/Cart';
import { Menu } from 'src/components/organisms/Menu';
import { Search } from 'src/components/organisms/Search';

import styles from 'src/components/organisms/Header/styles.module.css';

export const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={styles.wrapper}>
      <Logo logo="logo" size="m" />
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
        />
        <div className={styles.innerWrapper}>
          <Search isVisible={isVisible} setIsVisible={setIsVisible} />
          {!isVisible && <MobilePhone isIcon phone="+375 (29) 113-69-69" />}
        </div>
        <Cart count={5} />
      </div>
    </div>
  );
};

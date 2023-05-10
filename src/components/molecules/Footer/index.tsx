import classNames from 'classnames';

import { Icon } from 'src/components/atoms/Icon';
import { Logo } from 'src/components/atoms/Logo';
import { MenuLink } from 'src/components/atoms/MenuLink';
import { Props as MenuProps } from 'src/components/organisms/Menu';

import styles from 'src/components/molecules/Footer/styles.module.css';

const catalogLinks: MenuProps['links'] = [
  { text: 'Популярное', link: '/404' },
  { text: 'Сухоцветы', link: '/404' },
  { text: 'Букеты роз', link: '/404' },
  { text: 'Композиции из цветов', link: '/404' },
  { text: 'Индивидуальный букет', link: '/404' },
  { text: 'Букет на праздник', link: '/404' },
  { text: 'Упаковка подарков', link: '/404' },
  { text: 'Шары', link: '/404' },
  { text: 'Открытки', link: '/404' },
  { text: 'Конверты', link: '/404' },
];

const bouquetLinks: MenuProps['links'] = [
  { text: 'Для девушки', link: '/404' },
  { text: 'Для мужчины', link: '/404' },
  { text: 'Для жены', link: '/404' },
  { text: 'Для мамы', link: '/404' },
  { text: 'Для коллеги', link: '/404' },
  { text: 'Для начальника', link: '/404' },
  { text: 'Для дочки', link: '/404' },
  { text: 'Для детей', link: '/404' },
  { text: 'Для женщины', link: '/404' },
];

const menuLinks: MenuProps['links'] = [
  { text: 'Доставка и оплата', link: '/delivery' },
  { text: 'О нас', link: '/about' },
  { text: 'FAQ', link: '/faq' },
  { text: 'Контакты', link: '/contacts' },
  { text: 'для корпоративных клиентов', link: '/corp' },
];

export const Footer = () => (
  <div className={styles.container}>
    <div className={styles.wrapper}>
      <Logo logo="logo" size="m" />
      <div className={styles.title}>реквизиты</div>
      <div className={styles.description}>
        ООО «Ловефлове» 220035, Республика Беларусь, г. Минск, ул. Тимирязева д.
        67, комн. 112 (пом.11) УНП 193263781, р/с BY55MTBK30120001093300096372
        ЗАО «МТБанк», БИК MTBKBY22 220007, г. Минск, улица Толстого
      </div>
    </div>
    <div className={styles.wrapper}>
      <MenuLink text="Каталог" type="color" link="/catalog" />
      <div className={styles.wrapperLinks}>
        {catalogLinks.map((link) => (
          <MenuLink type="footer" key={link.text} {...link} />
        ))}
      </div>
    </div>
    <div className={styles.wrapper}>
      <MenuLink text="Букет" type="color" link="/404" />
      <div className={styles.wrapperLinks}>
        {bouquetLinks.map((link) => (
          <MenuLink type="footer" key={link.text} {...link} />
        ))}
      </div>
    </div>
    <div className={styles.wrapperMenuLinks}>
      {menuLinks.map((link) => (
        <MenuLink type="color" key={link.text} {...link} />
      ))}
    </div>
    <div className={styles.contacts}>
      <div className={styles.contact}>
        <span className={styles.contactTitle}>zakaz@loverflower.by</span>
        <span className={styles.contactInfo}>
          Доставка 24/7 по договоренности с оператором
        </span>
      </div>
      <div className={styles.contact}>
        <span className={styles.contactTitle}>ул. Тимирязева 67</span>
        <span className={classNames(styles.time, styles.contactInfo)}>
          10:00 до 21:00 без выходных
        </span>
      </div>
      <div className={styles.contact}>
        <span className={styles.contactTitle}>+375 (29) 113-69-69</span>
        <span className={styles.contactInfo}>прием звонков круглосуточно</span>
      </div>
      <div className={styles.icons}>
        <Icon icon="instagram" size={24} color="var(--color-green)" />
        <Icon icon="whatsUp" size={24} color="var(--color-green)" />
        <Icon icon="mobile" size={24} color="var(--color-green)" />
      </div>
    </div>
  </div>
);

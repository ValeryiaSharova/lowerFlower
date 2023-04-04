import classNames from 'classnames';

import { Icon } from 'src/components/atoms/Icon';
import { Link } from 'src/components/atoms/Link';
import { Logo } from 'src/components/atoms/Logo';

import styles from 'src/components/molecules/Footer/styles.module.css';

const catalogLinks = [
  'Популярное',
  'Сухоцветы',
  'Букеты роз',
  'Композиции из цветов',
  'Индивидуальный букет',
  'Букет на праздник',
  'Упаковка подарков',
  'Шары',
  'Открытки',
  'Конверты',
];

const bouquetLinks = [
  'Для девушки',
  'Для мужчины',
  'Для жены',
  'Для мамы',
  'Для коллеги',
  'Для начальника',
  'Для дочки',
  'Для детей',
  'Для женщины',
];

const menuLinks = [
  'Доставка и оплата',
  'О нас',
  'FAQ',
  'Контакты',
  'для корпоративных клиентов',
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
      <Link text="Каталог" type="color" />
      <div className={styles.wrapperLinks}>
        {catalogLinks.map((link) => (
          <Link text={link} type="footer" key={link} />
        ))}
      </div>
    </div>
    <div className={styles.wrapper}>
      <Link text="Букет" type="color" />
      <div className={styles.wrapperLinks}>
        {bouquetLinks.map((link) => (
          <Link text={link} type="footer" key={link} />
        ))}
      </div>
    </div>
    <div className={styles.wrapperMenuLinks}>
      {menuLinks.map((link) => (
        <Link text={link} type="color" key={link} />
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

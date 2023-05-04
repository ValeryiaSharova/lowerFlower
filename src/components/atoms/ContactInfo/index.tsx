import classNames from 'classnames';

import { Icon, Props as IconProps } from 'src/components/atoms/Icon';
import { MobilePhone } from 'src/components/atoms/MobilePhone';
import { Cart } from 'src/components/molecules/Cart';
import { Dimmer } from 'src/components/molecules/Dimmer';

import styles from 'src/components/atoms/ContactInfo/styles.module.css';

const icons: IconProps['icon'][] = ['instagram', 'whatsUp', 'mobile'];

export const ContactInfo = () => (
  <div className={styles.container}>
    <div className={styles.infoWrapper}>
      <div>
        <div className={styles.title}>zakaz@loverflower.by</div>
        <div className={styles.info}>
          Доставка 24/7 по договоренности с оператором
        </div>
      </div>
      <div>
        <div className={styles.title}>ул. Тимирязева 67</div>
        <div className={classNames(styles.info, styles.time)}>
          10:00 до 21:00 без выходных
        </div>
      </div>
    </div>
    <div className={styles.iconContainer}>
      <Dimmer borderRadius={10} padding={20}>
        <div className={styles.iconWrapper}>
          {icons.map((icon) => (
            <Icon icon={icon} size={24} color="var(--color-green)" key={icon} />
          ))}
        </div>
      </Dimmer>
    </div>
    <div className={styles.call}>
      <MobilePhone
        phone="+375 (29) 113-69-69"
        size={16}
        isIcon={false}
        style="default"
      />
      <Dimmer borderRadius={10} padding="0.625rem 1.25rem" width="fit-content">
        <div className={styles.callText}>
          <Icon icon="phone" size={16} color="var(--color-green)" />
          <span>заказать звонок</span>
        </div>
      </Dimmer>
    </div>
    <div className={styles.cart}>
      <Dimmer padding={15} borderRadius={10}>
        <Cart count={5} />
      </Dimmer>
    </div>
  </div>
);

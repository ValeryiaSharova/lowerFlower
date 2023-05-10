import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { ContactInfo } from 'src/components/atoms/ContactInfo';
import { Highlight } from 'src/components/atoms/Highlight';
import { Button } from 'src/components/molecules/Button';
import { Header } from 'src/components/organisms/Header';

import styles from 'src/components/pages/Main/First/styles.module.css';

export const First = () => (
  <div className={styles.wrapper}>
    <Header isAbsolute />
    <ContactInfo />
    <div className={classNames(styles.main, styles.padding)}>lover</div>
    <div className={styles.flower} />
    <div className={classNames(styles.main, styles.zIndex)}>flower</div>
    <div className={styles.container}>
      <span>Создаём для тех, кто ценит свежесть и изящество цветка</span>
      <Link to="/catalog">
        <Button style="color" text="смотреть каталог" />
      </Link>
    </div>
    <Highlight
      blur={125}
      color="green"
      height={293}
      rotate={42}
      width={359}
      position="absolute"
      top={550}
    />
    <Highlight
      blur={125}
      color="pink"
      height={211}
      rotate={-43}
      width={472}
      position="absolute"
      top={450}
      right={70}
    />
  </div>
);

import { BigText } from 'src/components/atoms/BigText';
import { Highlight } from 'src/components/atoms/Highlight';
import { Title } from 'src/components/atoms/Title';
import { Card } from 'src/components/molecules/Card';

import styles from 'src/components/pages/Main/Info/styles.module.css';

export const Info = () => (
  <div className={styles.infoWrapper}>
    <Title title="каталог" className={styles.infoTitle} />
    <div className={styles.text}>
      <BigText floatPosition="right" text="букеты" />
      <BigText floatPosition="left" text="Цветы" />
      <BigText floatPosition="right" text="дополн" />
    </div>
    <div className={styles.infoWrapperText}>
      <span>
        У нас самый большой выбор цветов, букетов, открыток и подарков. Мы
        всегда поможем вам подобрать букет для вашего события, наш менеджер вас
        проконсультирует и поможет определиться с выбором
      </span>
      <span>Ознакомьтесь с нашими разделами каталога</span>
    </div>
    <Highlight
      blur={125}
      color="pink"
      height={236}
      rotate={33}
      width={707}
      position="absolute"
      left={-175}
      top={550}
    />
    <Highlight
      blur={125}
      color="green"
      height={211}
      rotate={33}
      width={879}
      position="absolute"
      top={500}
      right={50}
    />
    <div className={styles.cardCatalogWrapper}>
      <div className={styles.firstCardCatalog}>
        <Card
          type="catalog"
          title="готовые букеты из сухоцветов"
          list={['букеты', 'для интерьера', 'Композиции']}
        />
      </div>
      <div className={styles.secondCardCatalog}>
        <Card
          type="catalog"
          title="Цветы"
          list={[
            'Сборные букеты',
            'Монобукеты',
            'Композиции из цветов',
            'розы',
            'свадебные',
          ]}
        />
      </div>
      <div className={styles.thirdCardCatalog}>
        <Card
          type="catalog"
          title="дополнительно"
          list={['шары', 'игрушки', 'открытки', 'упаковка']}
        />
      </div>
    </div>
  </div>
);

import { Link } from 'react-router-dom';

import { Highlight } from 'src/components/atoms/Highlight';
import { Title } from 'src/components/atoms/Title';
import { Button } from 'src/components/molecules/Button';

import styles from 'src/components/pages/Main/Reason/styles.module.css';

export const Reason = () => (
  <div className={styles.reasonWrapper}>
    <Highlight
      blur={125}
      color="pink"
      height={364}
      rotate={33}
      width={355}
      position="absolute"
      right={80}
      top={50}
      zIndex={-1}
    />
    <div className={styles.reasonTitleWrapper}>
      <Title title="особенный" />
      <Title title="повод?" className={styles.reasonTitle} />
      <div className={styles.reasonLine} />
      <img
        src="https://i.ibb.co/WfP0f1V/Rectangle-36.png"
        alt="firstBouquet"
        className={styles.reasonImg}
      />
    </div>
    <div className={styles.reasonDescContainer}>
      <div className={styles.reasonDescWrapper}>
        <span className={styles.reasonDescription}>
          Мы готовы прийти на помощь и собрать уникальный букет, на любой вкус,
          бюджет и для любого события по вашему индивидуальному заказу.
        </span>
        <ul className={styles.reasonList}>
          <li>учтем даже самые изысканные пожелания;</li>
          <li>
            подберем свежайшие цветы и сделаем уникальный букет или композицию;
          </li>
          <li>оплатить можно при получении или онлайн на сайте</li>
        </ul>
      </div>
      <img
        src="https://i.ibb.co/X8RF1gR/Rectangle-35.png"
        alt="secondBouquet"
      />
      <img src="https://i.ibb.co/60cGQcm/Rectangle-38.png" alt="thirdBouquet" />
      <img
        src="https://i.ibb.co/FW6DCqP/Rectangle-37.png"
        alt="fourthBouquet"
      />
    </div>
    <div className={styles.reasonButton}>
      <Link to="/404">
        <Button style="color" text="собрать индивидуальный букет" />
      </Link>
    </div>
  </div>
);

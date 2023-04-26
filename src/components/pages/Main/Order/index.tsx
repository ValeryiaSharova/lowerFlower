import { Step, Props as StepProps } from 'src/components/atoms/Step';
import { Title } from 'src/components/atoms/Title';

import flowers from 'src/assets/images/flowers.png';
import sign from 'src/assets/images/sign.png';

import styles from 'src/components/pages/Main/Order/styles.module.css';

const stepsData: StepProps['description'][] = [
  'Выберите какие цветы или подарки вы хотите купить',
  'Оформите заказ, и мы отправим вам подтверждение на электронную почту, а так же менеджер свяжется с вами по телефону или в WhatsApp',
  'Наши флористы бережно подойдут к созданию букета цветов в самом начале дня или накануне',
  'Один из наших курьеров или партнёров доставит ваш заказ по указанному адресу. Мы отправим вам сообщение в Whats App как только заказ будет доставлен',
  'Наслаждайтесь цветами , если вы заказали их для дома или любовью, которой поделились, если вы заказали для друга',
];

export const Order = () => (
  <div className={styles.orderContainer}>
    <img src={flowers} alt="firstFlowers" className={styles.orderFlowers} />
    <div className={styles.orderWrapper}>
      <Title title="Как сделать" />
      <Title title="заказ" />
      <div className={styles.innerWrapper}>
        <div className={styles.line} />
        <div className={styles.steps}>
          {stepsData.map((item, index) => (
            <Step description={item} step={index + 1} key={index} />
          ))}
        </div>
      </div>
      <img src={sign} alt="firstFlowers" className={styles.orderSign} />
    </div>
  </div>
);

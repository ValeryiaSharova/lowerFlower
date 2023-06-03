import { BeautyText } from 'src/components/atoms/BeautyText';
import {
  Breadcrumbs,
  Props as BreadcrumbsProps,
} from 'src/components/atoms/Breadcrumbs';
import { Highlight } from 'src/components/atoms/Highlight';
import { Title } from 'src/components/atoms/Title';
import { Dimmer } from 'src/components/molecules/Dimmer';
import { Header } from 'src/components/organisms/Header';

import flower1 from 'src/assets/images/about1.png';
import flower2 from 'src/assets/images/about2.png';
import flower3 from 'src/assets/images/about3.png';

import styles from 'src/components/pages/About/styles.module.css';

const breadcrumbsItems: BreadcrumbsProps['items'] = [
  { content: 'Главная', link: '/' },
  { content: 'о нас', link: '/about' },
];

export const About = () => (
  <div className={styles.wrapper}>
    <img src={flower1} alt="flower1" className={styles.flower1} />
    <img src={flower2} alt="flower2" className={styles.flower2} />
    <img src={flower3} alt="flower3" className={styles.flower3} />
    <Header isFixed />
    <div className={styles.breadcrumbsWrapper}>
      <Breadcrumbs items={breadcrumbsItems} />
    </div>
    <Title title="о нас" className={styles.title} />
    <div className={styles.subTitleWrapper}>
      <BeautyText
        color="green"
        text="Lover flower"
        className={styles.subTitle}
      />
      <div className={styles.line} />
    </div>
    <Dimmer className={styles.dimmer}>
      <div className={styles.dimmerContainer}>
        <div className={styles.dimmerTitle}>
          молодая команда разных людей с одинаковыми ценностями.
        </div>
        <div className={styles.dimmerDescription}>
          Мы считаем, что удовольствие от качества длится дольше, чем
          удовольствие от низкой цены. И поэтому в создание нашей букетерии мы
          вложили все, чем располагаем: душу, сердце, время и мечты! Мы готовы
          обещать вам только то, что можем сделать. А делаем мы только самое
          качественное, самое интересное и обязательно уникальное. Мы всегда
          честны со своими клиентами во всем – в нашем каталоге только те
          букеты, которые вы действительно сможете купить.
        </div>
      </div>
    </Dimmer>
    <div className={styles.infoWrapper}>
      <div className={styles.infoInnerWrapper}>
        <BeautyText color="green" text="гарантии" />
        <div className={styles.infoWrapperText}>
          Каждый цветок уникален и чтобы вы были уверены в качестве, мы пришлем
          вам фотографию именно вашего букета до его отправки получателю. Вся
          предоставленная Вами информация конфиденциальна и будет известна
          только нам и курьеру для осуществления доставки.
        </div>
      </div>
      <div className={styles.infoInnerWrapper}>
        <BeautyText
          color="green"
          text="Заказ букетов на сайте компании Lower Flower – это:"
          className={styles.infoInnerTitle}
        />
        <ul className={styles.infoWrapperList}>
          <li>выбор оттенков и сортов цветков в любое время года;</li>
          <li>отправка фото готовой композиции перед отправкой;</li>
          <li>возможность заказать цветы с доставкой в течение часа; </li>
          <li>
            выгодные цены – на сайте только те варианты, что Вы сможете купить;{' '}
          </li>
          <li>полная конфиденциальность по заказу; </li>
          <li>
            мы подбираем открытку, воздушные шар, подарок по Вашему желанию;
          </li>
          <li>
            в нашем уютном цветочном магазине цветы, которые приятно дарить.
          </li>
        </ul>
      </div>
    </div>
    <BeautyText
      color="white"
      text="Природная гармония цвета, неповторимость бутонов и Ваши чувства в нежных лепестках не оставят никого равнодушным."
      className={styles.endText}
    />
    <div className={styles.endSubText}>
      Вы выбираете и заказываете цветочный сюрприз, а мы вкладываем в него душу!
    </div>
    <Highlight
      blur={125}
      color="yellow"
      height={220}
      rotate={-72}
      width={275}
      position="absolute"
      zIndex={-2}
      top={0}
      left={-100}
    />
    <Highlight
      blur={125}
      color="yellow"
      height={235}
      rotate={-72}
      width={294}
      position="absolute"
      right={300}
      top={350}
      zIndex={-2}
    />
    <Highlight
      blur={125}
      color="yellow"
      height={236}
      rotate={-72}
      width={294}
      position="absolute"
      top={600}
      left={600}
      zIndex={-1}
    />
    <Highlight
      blur={125}
      color="yellow"
      height={437}
      rotate={21}
      width={206}
      position="absolute"
      zIndex={-1}
      bottom={-400}
    />
    <Highlight
      blur={125}
      color="yellow"
      height={364}
      rotate={33}
      width={355}
      position="absolute"
      right={0}
      bottom={-450}
      zIndex={-1}
    />
  </div>
);

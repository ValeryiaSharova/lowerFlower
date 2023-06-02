import {
  Breadcrumbs,
  Props as BreadcrumbsProps,
} from 'src/components/atoms/Breadcrumbs';
import { Highlight } from 'src/components/atoms/Highlight';
import { Title } from 'src/components/atoms/Title';
import { Card } from 'src/components/molecules/Card';
import { Dimmer } from 'src/components/molecules/Dimmer';
import { Header } from 'src/components/organisms/Header';

import additionalSign from 'src/assets/images/additionalSign.png';
import flower1 from 'src/assets/images/deliveryFlower1.png';
import flower2 from 'src/assets/images/deliveryFlower2.png';
import flower3 from 'src/assets/images/deliveryFlower3.png';

import styles from 'src/components/pages/Delivery/styles.module.css';

const breadcrumbsData: BreadcrumbsProps['items'] = [
  { content: 'Главная', link: '/' },
  { content: 'доставка и оплата', link: '/delivery' },
];

const cardData: string[] = [
  'БАНКОВСКОЙ КАРТОЙ ПРИ ОФОРМЛЕНИИ ЗАКАЗА ЧЕРЕЗ САЙТ или по ссылке',
  ' НАЛИЧНЫМИ,  БАНКОВСКОЙ КАРТОЙ ПРИ САМОВЫВОЗЕ или с расчетного счета орагнизации',
  'НАЛИЧНЫМИ ПРИ ДОСТАВКЕ КУРЬЕРОМ',
  'КРИПТОВАЛЮТОЙ',
];

export const Delivery = () => (
  <div className={styles.wrapper}>
    <img src={flower1} alt="flower1" className={styles.flower1} />
    <img src={flower2} alt="flower2" className={styles.flower2} />
    <img src={flower3} alt="flower3" className={styles.flower3} />
    <Header isFixed />
    <div className={styles.container}>
      <Breadcrumbs items={breadcrumbsData} />
      <div className={styles.titleWrapper}>
        <Title title="доставка" />
        <div className={styles.innerTitleWrapper}>
          <Title title="и оплата" />
        </div>
      </div>
      <div className={styles.columnWrapper}>
        <div className={styles.attentionWrapper}>
          <div className={styles.attention}>!</div>
          <div className={styles.attentionInnerWrapper}>
            <div className={styles.attentionTitle}>Дорогие клиенты!</div>
            <div className={styles.attentionText}>
              Во время пандемии (COVID-19) компания Lover Flower призывает всех
              меньше контактировать с другими людьми для защиты себя и своих
              близких. Именно поэтому мы организовали&nbsp;
              <span className={styles.attentionAccent}>
                БЕСКОНТАКТНУЮ ДОСТАВКУ
              </span>
            </div>
          </div>
        </div>
        <div className={styles.paymentWrapper}>
          <div className={styles.paymentTitle}>Способы оплаты:</div>
          <div className={styles.paymentContainer}>
            {cardData.map((item, index) => (
              <Card type="payment" description={item} key={index} />
            ))}
          </div>
        </div>
        <div className={styles.deliveryCostWrapper}>
          <div className={styles.deliveryCostTItle}>стоимость доставки:</div>
          <ul className={styles.deliveryConstList}>
            <li>
              <span className={styles.deliveryCostWhite}>Бесплатно</span> – при
              заказе на сумму&nbsp;
              <span className={styles.deliveryCostGreen}>от 90 рублей</span>
            </li>
            <li>
              <span className={styles.deliveryCostWhite}>10 рублей</span> – при
              заказе на сумму&nbsp;
              <span className={styles.deliveryCostGreen}>менее 90 рублей</span>
            </li>
            <li>
              Так же вы можете забрать ваш заказ самостоятельно по адресу:&nbsp;
              <span className={styles.deliveryCostGreen}>
                г. Минск, ул. Тимирязева д. 67, комн. 112 ежедневно с 10.00 до
                21.00
              </span>
            </li>
          </ul>
        </div>
        <div className={styles.deliveryTermsWrapper}>
          <div className={styles.deliveryTermsItle}>Условия доставки:</div>
          <ul className={styles.deliveryTermsList}>
            <li>
              Доставка осуществляется по городу Минску в пределах МКАД &nbsp;
              <span className={styles.deliveryTermsGreen}>в любой день</span>
            </li>
            <li>
              Возможность, сроки и стоимость доставки за пределы МКАД, доставки
              в ночное время, праздники &nbsp;
              <span className={styles.deliveryCostGreen}>
                оговариваются с менеджером
              </span>
            </li>
          </ul>
        </div>
        <Dimmer
          borderRadius={20}
          padding={30}
          width="80%"
          className={styles.dimmerWrapper}
        >
          <div className={styles.additionalWrapper}>
            <div className={styles.additionalTitle}>Дополнительно:</div>
            <div className={styles.additionalTextContainer}>
              <div>
                Доставка иному лицу возможна только в случае оплаты заказа
                заказчиком. Доставка осуществляется не ранее чем через 2 часа
                после оплаты заказа, но может быть ранее, если букет есть в
                наличии либо по договорённости с менеджером. Время ожидания
                курьера составляет 15 минут. В случае если на момент доставки
                цветов получателя нет либо нет возможности по иным причинам
                произвести доставку (указан неточный адрес, закрытая входная
                дверь, контрольно-пропускная система и др.), мы оставляем за
                собой право по собственному выбору:
                <ul className={styles.additionalList}>
                  <li> оставить цветы тому, кто открыл дверь; </li>
                  <li>
                    с заказчиком согласовать повторную доставку, которая
                    дополнительно оплачивается;
                  </li>
                  <li>
                    отказаться от передачи цветов без возврата денежных средств.
                  </li>
                </ul>
              </div>
              <div>
                Если вы либо иной получатель не получили заказ, вам необходимо
                сообщить об этом менеджеру по телефону{' '}
                <span className={styles.additionalGreen}>
                  +375 29 113 69 69
                </span>
                .
              </div>
            </div>
          </div>
          <div className={styles.additionalWrapper}>
            <div className={styles.additionalTitle}>Возврат денег:</div>
            <div className={styles.additionalTextContainer}>
              <div>
                При отказе заказчика от заказа в течение двух часов, если заказ
                ещё не начал готовиться, средства возвращаются в полном объёме.
                Если же флорист начал подготовку, то заказчик имеет право на
                возврат 50% стоимости, либо, если ещё не был оплачен, то обязан
                оплатить 50%.
              </div>
              <div>
                Цветы надлежащего качества возврату и обмену не подлежат, а если
                имеются какие-либо недостатки в цветах – возврат производится
                лишь если эти недостатки не являются природными и естественными
                изъянами растения. Возврат денежных средств производится
                незамедлительно на тот счёт, с которого произошла оплата, их же
                поступление на счёт зависит от платёжной системы.
              </div>
            </div>
          </div>
        </Dimmer>
      </div>
    </div>
    <img src={additionalSign} alt="sign" className={styles.additionalSign} />
    <Highlight
      blur={125}
      color="white"
      height={220}
      rotate={-72}
      width={275}
      position="absolute"
      top={-50}
      left={-50}
      zIndex={-1}
    />
    <Highlight
      blur={125}
      color="white"
      height={625}
      rotate={33}
      width={504}
      position="absolute"
      right={0}
      top={-200}
      zIndex={-2}
    />
    <Highlight
      blur={125}
      color="white"
      height={220}
      rotate={-72}
      width={275}
      position="absolute"
      top={700}
      left={300}
      zIndex={-1}
    />
    <Highlight
      blur={125}
      color="white"
      height={220}
      rotate={-72}
      width={346}
      position="absolute"
      top={650}
      right={350}
      zIndex={-1}
    />
    <Highlight
      blur={125}
      color="white"
      height={431}
      rotate={-72}
      width={538}
      position="absolute"
      bottom={500}
      left={-100}
      zIndex={-1}
    />
    <Highlight
      blur={125}
      color="white"
      height={431}
      rotate={-72}
      width={538}
      position="absolute"
      bottom={300}
      right={300}
      zIndex={-1}
    />
    <Highlight
      blur={125}
      color="white"
      height={436}
      rotate={21}
      width={206}
      position="absolute"
      bottom={-400}
      zIndex={-1}
    />
    <Highlight
      blur={125}
      color="white"
      height={364}
      rotate={33}
      width={355}
      position="absolute"
      zIndex={-1}
      bottom={-400}
      right={-100}
    />
  </div>
);

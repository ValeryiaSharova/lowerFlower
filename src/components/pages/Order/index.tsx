import {
  Breadcrumbs,
  Props as BreadcrumbsProps,
} from 'src/components/atoms/Breadcrumbs';
import { Highlight } from 'src/components/atoms/Highlight';
import { Title } from 'src/components/atoms/Title';
import { Button } from 'src/components/molecules/Button';
import {
  CartItems,
  Props as CartItemsProps,
} from 'src/components/molecules/CartItems';
import { Input } from 'src/components/molecules/Input';
import { RadioGroup } from 'src/components/molecules/RadioGroup';
import { Header } from 'src/components/organisms/Header';

import order1 from 'src/assets/images/order1.png';
import order2 from 'src/assets/images/order2.png';
import order3 from 'src/assets/images/order3.png';
import sign from 'src/assets/images/paymentSign0.png';
import sign2 from 'src/assets/images/paymentSign.png';

import styles from 'src/components/pages/Order/styles.module.css';

export const Order = () => {
  const breadcrumbs: BreadcrumbsProps['items'] = [
    { content: 'Главная', link: '/' },
    { content: 'оформление заказа', link: '/order' },
  ];

  const cartItems: CartItemsProps['items'] = [
    {
      img: 'https://i.ibb.co/bFf2s5T/image-135.png',
      name: 'рубиновые искры',
      price: 150,
      quantity: 1,
    },
    {
      img: 'https://i.ibb.co/pwC5mFY/image-133.png',
      name: 'рубиновые искры',
      price: 120,
      quantity: 1,
    },
  ];

  return (
    <div className={styles.container}>
      <img src={order1} alt="img1" className={styles.leftImg} />
      <img src={order3} alt="img3" className={styles.rightImgTop} />
      <img src={order2} alt="img2" className={styles.rightImg} />
      <img src={sign} alt="sign" className={styles.sign} />
      <img src={sign2} alt="sign2" className={styles.sign2} />
      <Header isFixed />
      <div className={styles.wrapper}>
        <div className={styles.breadcrumbsWrapper}>
          <Breadcrumbs items={breadcrumbs} />
        </div>
        <div className={styles.title}>
          <Title title="оформление" />
          <div className={styles.titleWrapper}>
            <Title title="заказа" />
          </div>
        </div>
        <div className={styles.orderTitle}>Оформление заказа</div>
        <div className={styles.formWrapper}>
          <div className={styles.formContainer}>
            <div className={styles.contactInfo}>
              <span className={styles.titleContainer}>Контактные данные</span>
              <Input
                placeholder="Введите ваше имя"
                isRequired
                label="Ваше имя"
              />
              <Input
                placeholder="+7 (977) 777-77-77"
                isRequired
                label="Ваш телефон"
              />
              <Input
                placeholder="Введите вашу почту"
                isRequired
                label="Ваш e-mail"
              />
              <Input
                placeholder="+7 (977) 777-77-77"
                label="Телефон получателя (необязательно)"
              />
              <Input
                placeholder="Введите имя получателя"
                label="Имя получателя (необязательно)"
              />
              <Input
                placeholder="Примечания к вашеу заказу,  особые пожелания отделу доставки"
                label="Комментарий к заказу"
              />
            </div>
            <div className={styles.deliveryContainer}>
              <RadioGroup
                items={[
                  { label: 'Самовывоз', value: 'Pickup' },
                  { label: 'Доставка курьером', value: 'delivery' },
                ]}
                title="Доставка"
              />
              <Input placeholder="Введите улицу" isRequired label="Улица" />
              <div className={styles.addressContainer}>
                <Input placeholder="Корп/стр" label="Корп/стр" />
                <Input placeholder="Дом" label="Дом" />
                <Input placeholder="Кв/офис" label="Кв/офис" />
              </div>
              <span className={styles.delivery}>Стоимость доставки 0 ₽</span>
            </div>
            <RadioGroup
              items={[
                { label: 'Банковская карта', value: 'card' },
                { label: 'Наличными', value: 'cash' },
                { label: 'Apple pay', value: 'applePay' },
                { label: 'Google pay', value: 'googlePay' },
                { label: 'Криптовалюта', value: 'crypto' },
                { label: 'С расчетного счета', value: 'account' },
              ]}
              title="Оплата"
            />
            <div className={styles.promocodeWrapper}>
              <span className={styles.promocode}>Промокод</span>
              <div className={styles.promocodeContainer}>
                <Input placeholder="Промокод" />
                <Button style="green" text="Применить" />
              </div>
            </div>
            <div className={styles.priceContainer}>
              <div className={styles.price}>
                <span>Общая сумма заказа</span>
                <span>
                  {cartItems.reduce(
                    (acc, item) => acc + item.price * item.quantity,
                    0
                  )}
                  &nbsp; руб.
                </span>
              </div>
              <span className={styles.text}>Скидка = 0 руб.</span>
              <span className={styles.text}>Доставка = 0 руб.</span>
              <Button style="color" text="К оплате" />
              <span className={styles.agreement}>
                Нажимая на кнопку «К Оплате», я даю свое согласие на обработку
                персональных данных, в соответствии с &nbsp;
                <span>Политикой конфиденциальности,</span>&nbsp; а так же
                ознакомлен с условиями оплаты и доставки
              </span>
            </div>
          </div>
          <div className={styles.cartWrapper}>
            <span className={styles.titleContainer}>Ваш заказ:</span>
            <div className={styles.cartWrapper}>
              <CartItems items={cartItems} />
            </div>
            <span className={styles.titleContainer}>
              Предварительный итог:&nbsp;
              {cartItems.reduce(
                (acc, item) => acc + item.price * item.quantity,
                0
              )}
              &nbsp; руб.
            </span>
          </div>
        </div>
      </div>
      <Highlight
        blur={125}
        color="green"
        height={174}
        rotate={-72}
        width={217}
        position="absolute"
        top={0}
        left={0}
        zIndex={-2}
      />
      <Highlight
        blur={125}
        color="pink"
        height={625}
        rotate={33}
        width={504}
        position="absolute"
        right={-50}
        top={-200}
        zIndex={-2}
      />
      <Highlight
        blur={125}
        color="green"
        height={211}
        rotate={139}
        width={403}
        position="absolute"
        right={-200}
        top={1100}
      />
      <Highlight
        blur={125}
        color="pink"
        height={364}
        rotate={33}
        width={355}
        position="absolute"
        right={-100}
        top={1200}
        zIndex={-1}
      />
      {/* <Highlight
        blur={125}
        color="green"
        height={211}
        width={100}
        rotate={21}
        position="absolute"
        zIndex={-1}
      /> */}
      <Highlight
        blur={125}
        color="green"
        height={211}
        rotate={21}
        width={100}
        position="absolute"
        bottom={-50}
        zIndex={-1}
      />
      <Highlight
        blur={125}
        color="green"
        height={211}
        rotate={21}
        width={879}
        position="absolute"
        bottom={-200}
        zIndex={-1}
        left={600}
      />
      <Highlight
        blur={125}
        color="pink"
        height={264}
        rotate={33}
        width={355}
        position="absolute"
        bottom={-100}
        zIndex={-1}
        right={0}
      />
    </div>
  );
};

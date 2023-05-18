import styles from 'src/components/atoms/ShippingAndPayment/styles.module.css';

export const ShippingAndPayment = () => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <div className={styles.title}>Способы оплаты:</div>
      <ul className={styles.list}>
        <li>БАНКОВСКОЙ КАРТОЙ ПРИ ОФОРМЛЕНИИ ЗАКАЗА ЧЕРЕЗ САЙТ</li>
        <li>НАЛИЧНЫМИ ИЛИ БАНКОВСКОЙ КАРТОЙ ПРИ САМОВЫВОЗЕ</li>
        <li>НАЛИЧНЫМИ ПРИ ДОСТАВКЕ КУРЬЕРОМ</li>
        <li>КРИПТОВАЛЮТОЙ ОНЛАЙН</li>
      </ul>
    </div>
    <div className={styles.container}>
      <div className={styles.title}>стоимость доставки:</div>
      <ul className={styles.list}>
        <li>
          <span className={styles.bold}>Бесплатно</span> – при заказе на сумму
          <span className={styles.green}> от 90 рублей</span>
        </li>
        <li>
          <span className={styles.bold}>10 рублей</span> – при заказе на сумму
          <span className={styles.green}> менее 90 рублей</span>
        </li>
        <li>
          Возможность, сроки и стоимость доставки за пределы МКАД, доставки в
          ночное время, праздники
          <span className={styles.green}> оговариваются с менеджером</span>
        </li>
        <li>
          Так же вы можете забрать ваш заказ самостоятельно по адресу: &nbsp;
          <span className={styles.green}>
            г. Минск, ул. Тимирязева д. 67, комн. 112 ежедневно с 10.00 до 21.00
          </span>
        </li>
      </ul>
    </div>
    <div className={styles.container}>
      <div className={styles.title}>Условия доставки:</div>
      <div className={styles.wrapperText}>
        Доставка осуществляется по городу Минску в пределах МКАД &nbsp;
        <span className={styles.green}>в любой день с 09.00 до 22.00.</span>
        &nbsp; Доставка в ночное время осуществляется по договоренности с
        оператором
      </div>
    </div>
  </div>
);

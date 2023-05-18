import React from 'react';

import { Link } from 'src/components/atoms/Link';
import { Dimmer } from 'src/components/molecules/Dimmer';

import styles from 'src/components/molecules/Card/styles.module.css';

type CatalogCardType = {
  type: 'catalog';
  title: string;
  list: string[];
  width?: string | number;
};

type AdditionalCardType = {
  type: 'additional';
  title: string;
  description: string;
};

type PaymentCardType = {
  type: 'payment';
  description: string;
};

type ContactCardType = {
  type: 'contact';
  title: string;
  description: string;
};

export type Props =
  | CatalogCardType
  | AdditionalCardType
  | PaymentCardType
  | ContactCardType;

const CatalogCard: React.FC<CatalogCardType> = ({ list, title, width }) => (
  <Dimmer borderRadius={20} padding={30} width={width}>
    <div className={styles.catalogTitle}>{title}</div>
    <ul className={styles.catalogList}>
      {list.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
    <Link text="смотреть каталог" color="var(--color-green)" src="/catalog" />
  </Dimmer>
);

const AdditionalCard: React.FC<AdditionalCardType> = ({
  description,
  title,
}) => (
  <Dimmer borderRadius={20} padding="30px 16px" width={255}>
    <div className={styles.additionalCircle} />
    <div className={styles.additionalTitle}>{title}</div>
    <div className={styles.additionalDesc}>{description}</div>
  </Dimmer>
);

const PaymentCard: React.FC<PaymentCardType> = ({ description }) => (
  <Dimmer borderRadius={20} padding="20px 32px">
    <div className={styles.paymentCircle} />
    <div className={styles.paymentDesc}>{description}</div>
  </Dimmer>
);

const ContactCard: React.FC<ContactCardType> = ({ description, title }) => (
  <Dimmer borderRadius={20} padding={27}>
    <div className={styles.contactWrapper}>
      <div className={styles.contactTitle}>{title}</div>
      <div className={styles.contactDesc}>{description}</div>
    </div>
  </Dimmer>
);

const typeToComponent: Record<Props['type'], React.FC<any>> = {
  additional: AdditionalCard,
  catalog: CatalogCard,
  contact: ContactCard,
  payment: PaymentCard,
};

export const Card: React.FC<Props> = (props) => {
  const Component = typeToComponent[props.type];

  return <Component {...props} />;
};

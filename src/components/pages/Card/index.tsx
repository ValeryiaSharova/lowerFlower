import { useParams } from 'react-router-dom';

import {
  Breadcrumbs,
  Props as BreadcrumbsProps,
} from 'src/components/atoms/Breadcrumbs';
import { Carousel } from 'src/components/atoms/Carousel';
import { Highlight } from 'src/components/atoms/Highlight';
import { ShippingAndPayment } from 'src/components/atoms/ShippingAndPayment';
import { Card as CardMolecule } from 'src/components/molecules/Card';
import { CommentBlock } from 'src/components/molecules/CommentBlock';
import { FullItemCard } from 'src/components/molecules/FullItemCard';
import { Tabs } from 'src/components/molecules/Tabs';
import { Header } from 'src/components/organisms/Header';
import {
  carouselData,
  commentsData,
  dataCards,
  items,
} from 'src/components/pages/Card/data';

import cardImg from 'src/assets/images/cardImage.png';

import styles from 'src/components/pages/Card/styles.module.css';

export const Card = () => {
  const { id } = useParams();

  const dataItem = items[Number(id)];

  const breadcrumbs: BreadcrumbsProps['items'] = [
    { content: 'Главная', link: '/' },
    { content: 'каталог', link: '/catalog' },
    { content: dataItem.title, link: `card/${id}` },
  ];

  return (
    <div className={styles.wrapper}>
      <Header isFixed />
      <div className={styles.container}>
        <Breadcrumbs items={breadcrumbs} />
        <div className={styles.itemContainer}>
          <FullItemCard {...dataItem} />
        </div>
        <div className={styles.additionalWrapper}>
          <div className={styles.additionalTitle}>Дополнительно к заказу:</div>
          <div className={styles.additionalCards}>
            {dataCards.map((item, index) => (
              <CardMolecule {...item} key={index} />
            ))}
          </div>
        </div>
        <div className={styles.tabContainer}>
          <Tabs
            title={[{ text: 'доставка и оплата' }, { text: 'отзывы' }]}
            content={[
              <ShippingAndPayment />,
              <CommentBlock
                comments={
                  Number(id) % 2 === 0 ? commentsData[0] : commentsData[1]
                }
                nameBouquet={dataItem.title}
              />,
            ]}
          />
          <img src={cardImg} alt="flower" className={styles.image} />
        </div>
        <div className={styles.carouselContainer}>
          <span className={styles.carouselTitle}>вам может понравиться:</span>
          <Carousel itemCardData={carouselData} />
        </div>
      </div>
      <>
        <Highlight
          blur={125}
          color="green"
          height={174}
          rotate={-72}
          width={217}
          position="absolute"
          top={0}
          zIndex={-1}
        />
        <Highlight
          blur={125}
          color="pink"
          height={360}
          rotate={33}
          width={504}
          position="absolute"
          top={-100}
          right={-100}
          zIndex={-1}
        />
        <Highlight
          blur={125}
          color="pink"
          height={360}
          rotate={33}
          width={590}
          position="absolute"
          top={200}
          left={150}
          zIndex={-1}
        />
        <Highlight
          blur={125}
          color="pink"
          height={256}
          rotate={21}
          width={560}
          position="absolute"
          zIndex={-1}
          left={300}
          top={800}
        />
        <Highlight
          blur={125}
          color="green"
          height={218}
          rotate={21}
          width={712}
          position="absolute"
          zIndex={-1}
          top={800}
          right={250}
        />
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
      </>
    </div>
  );
};

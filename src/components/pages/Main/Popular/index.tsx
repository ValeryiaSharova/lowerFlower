import { Arrow } from 'src/components/atoms/Arrow';
import { Highlight } from 'src/components/atoms/Highlight';
import { Link } from 'src/components/atoms/Link';
import { Title } from 'src/components/atoms/Title';
import {
  ItemCard,
  Props as ItemCardProps,
} from 'src/components/molecules/ItemCard';

import background from 'src/assets/images/background.png';

import styles from 'src/components/pages/Main/Popular/styles.module.css';

const itemCardData: ItemCardProps[] = [
  {
    imageSrc: 'https://i.ibb.co/J5x1QBd/image-114.png',
    price: 160,
    title: 'лучший день',
    type: 'new',
  },
  {
    imageSrc: 'https://i.ibb.co/NsL7WbZ/image-115.png',
    price: 160,
    title: 'лучший день',
  },
  {
    imageSrc: 'https://i.ibb.co/NZXsZzJ/image-116.png',
    price: 160,
    sale: 187,
    title: 'лучший день',
    type: 'sale',
  },
];

export const Popular = () => (
  <div className={styles.popularWrapper}>
    <img src={background} alt="background" className={styles.background} />
    <Highlight
      blur={125}
      color="green"
      height={662}
      rotate={33}
      width={814}
      position="absolute"
      top={350}
      zIndex={-1}
    />
    <Highlight
      blur={125}
      color="pink"
      height={396}
      rotate={33}
      width={571}
      position="absolute"
      top={700}
      left={500}
    />
    <Title title="Популярные" className={styles.popularTitle} />
    <Title title="букеты" className={styles.popularTitleCenter} />
    <div className={styles.popularDescription}>
      Самые любимые композиции наших клиентов
    </div>

    <div className={styles.cardWrapper}>
      <div className={styles.arrow}>
        <Arrow size="big" color="var(--color-green)" rotate={-180} />
      </div>
      {itemCardData.map((item) => (
        <ItemCard {...item} key={item.imageSrc} />
      ))}
      <div className={styles.arrow}>
        <Arrow size="big" color="var(--color-green)" />
      </div>
    </div>

    <div className={styles.linkWrapper}>
      <Link text="смотреть весь каталог" color="var(--color-pink)" />
      <Arrow size="small" color="var(--color-pink)" />
    </div>
  </div>
);

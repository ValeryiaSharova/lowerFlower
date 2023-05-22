import { Arrow } from 'src/components/atoms/Arrow';
import { Carousel } from 'src/components/atoms/Carousel';
import { Highlight } from 'src/components/atoms/Highlight';
import { Link } from 'src/components/atoms/Link';
import { Title } from 'src/components/atoms/Title';
import { Props as ItemCardProps } from 'src/components/molecules/ItemCard';

import background from 'src/assets/images/background.png';

import styles from 'src/components/pages/Main/Popular/styles.module.css';

const itemCardData: ItemCardProps[] = [
  {
    imageSrc: 'https://i.ibb.co/vY01XCG/image-140.png',
    price: 160,
    title: 'лучший день',
    type: 'new',
  },
  {
    imageSrc: 'https://i.ibb.co/r3Dr1g4/image-139.png',
    price: 160,
    title: 'лучший день',
  },
  {
    imageSrc: 'https://i.ibb.co/3CYf6Mn/image-114.png',
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

    <Carousel itemCardData={itemCardData} isBigImg />

    <div className={styles.linkWrapper}>
      <Link
        text="смотреть весь каталог"
        color="var(--color-pink)"
        src="/catalog"
      />
      <Arrow size="small" color="var(--color-pink)" />
    </div>
  </div>
);

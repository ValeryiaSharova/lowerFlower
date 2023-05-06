import { Breadcrumbs } from 'src/components/atoms/Breadcrumbs';
import { CategoryItem } from 'src/components/atoms/CategoryItem';
import { ContactInfo } from 'src/components/atoms/ContactInfo';
import { Highlight } from 'src/components/atoms/Highlight';
import { Title } from 'src/components/atoms/Title';
import { Button } from 'src/components/molecules/Button';
import { CheckboxGroup } from 'src/components/molecules/CheckboxGroup';
import { Dimmer } from 'src/components/molecules/Dimmer';
import { ItemCard } from 'src/components/molecules/ItemCard';
import { Slider } from 'src/components/molecules/Slider';
import { Header } from 'src/components/organisms/Header';
import {
  categories,
  items,
  listOfCategories,
} from 'src/components/pages/Catalog/data';

import flowerLeft from 'src/assets/images/flowerleft.png';
import flowerRight from 'src/assets/images/flowerright.png';

import styles from 'src/components/pages/Catalog/styles.module.css';

export const Catalog = () => (
  <div className={styles.wrapper}>
    <img src={flowerLeft} alt="flowerLeft" className={styles.flowerLeft} />
    <img src={flowerRight} alt="flowerRight" className={styles.flowerRight} />
    <div className={styles.headerWrapper}>
      <Header isAbsolute />
      <ContactInfo />
    </div>
    <div className={styles.container}>
      <Breadcrumbs
        items={[
          { content: 'главная', link: '/' },
          { content: 'каталог', link: '/catalog' },
        ]}
      />
      <Dimmer padding={20} width="85%" borderRadius={20}>
        <Title title="каталог" />
        <Title title="букетов" className={styles.titlePadding} />
        <div className={styles.description}>
          В нашем магазине самый большой выбор букетов для любых событий:
        </div>
        <div className={styles.categoriesWrapper}>
          {categories.map((item) => (
            <CategoryItem text={item} />
          ))}
        </div>
      </Dimmer>
    </div>
    <div className={styles.itemsContainer}>
      <Dimmer
        borderRadius={20}
        width="15.938rem"
        padding="1.25rem 1rem"
        className={styles.listOfCategories}
      >
        {listOfCategories.map((item) => (
          <CheckboxGroup
            checkboxes={item.checkboxes}
            title={item.title}
            key={item.title}
          />
        ))}
        <Slider
          description="цена"
          maxValue={500}
          minValue={3}
          title="стоимость"
          unit="руб."
        />
        <Button style="black" text="Сбросить фильтр" />
      </Dimmer>
      <div className={styles.items}>
        {items.map((item) => (
          <ItemCard {...item} />
        ))}
      </div>
    </div>
    <>
      <Highlight
        blur={125}
        color="pink"
        height={280}
        rotate={33}
        width={393}
        position="absolute"
        top={0}
        right={-80}
      />
      <Highlight
        blur={125}
        color="pink"
        height={360}
        rotate={33}
        width={504}
        position="absolute"
        top={287}
        zIndex={-2}
      />
      <Highlight
        blur={125}
        color="pink"
        height={256}
        rotate={33}
        width={435}
        position="absolute"
        right={50}
        top={550}
        zIndex={-2}
      />
      <Highlight
        blur={125}
        color="pink"
        height={360}
        rotate={33}
        width={504}
        position="absolute"
        top={750}
        zIndex={-1}
      />
      <Highlight
        blur={125}
        color="green"
        height={173}
        rotate={-72}
        width={748}
        position="absolute"
        top={1200}
        left={-100}
        zIndex={-1}
      />
      <Highlight
        blur={125}
        color="green"
        height={211}
        rotate={21}
        width={100}
        position="absolute"
        bottom={-300}
        zIndex={-1}
      />
      <Highlight
        blur={125}
        color="green"
        height={211}
        rotate={21}
        width={879}
        position="absolute"
        bottom={-350}
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
        bottom={-300}
        zIndex={-1}
        right={0}
      />
    </>
  </div>
);

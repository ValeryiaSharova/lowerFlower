import React from 'react';

import { Button } from 'src/components/molecules/Button';
import {
  CheckboxGroup,
  Props as CheckboxGroupProps,
} from 'src/components/molecules/CheckboxGroup';
import { Dimmer } from 'src/components/molecules/Dimmer';
import { Slider } from 'src/components/molecules/Slider';

import styles from 'src/components/organisms/Filters/styles.module.css';

export type Props = {
  listOfItems: CheckboxGroupProps[];
};

export const Filters: React.FC<Props> = ({ listOfItems }) => (
  <Dimmer
    borderRadius={20}
    width="15.938rem"
    padding="1.25rem 1rem"
    className={styles.listOfCategories}
  >
    {listOfItems.map((item) => (
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
);

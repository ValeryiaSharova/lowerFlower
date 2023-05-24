import { Drawer } from '@mui/material';
import React from 'react';

import { Button } from 'src/components/molecules/Button';
import {
  CartItems,
  Props as CartItemsProps,
} from 'src/components/molecules/CartItems';
import { IconButton } from 'src/components/molecules/IconButton';

import styles from 'src/components/organisms/CartMenu/styles.module.css';

export type Props = {
  isOpen: boolean;
  handleClose: () => void;
};

const cartItemsData: CartItemsProps['items'] = [
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

export const CartMenu: React.FC<Props> = ({ isOpen, handleClose }) => (
  <Drawer
    anchor="right"
    open={isOpen}
    onClose={handleClose}
    className={styles.wrapper}
  >
    <div className={styles.cart}>
      <div>
        <div className={styles.titleWrapper}>
          <span className={styles.title}>Ваша корзина</span>
          <IconButton
            icon="close"
            size={30}
            onClick={handleClose}
            color="#43FFD2"
          />
        </div>
        <CartItems items={cartItemsData} />
      </div>
      <div className={styles.buttonWrapper}>
        <div>
          <span className={styles.price}>
            Предварительный итог:&nbsp;
            {cartItemsData.reduce(
              (acc, item) => acc + item.price * item.quantity,
              0
            )}
            &nbsp; руб.
          </span>
          <div className={styles.description}>
            Чтобы узнать стоимость доставки, перейдите к оформлению заказа.
          </div>
        </div>
        <Button style="black" text="Оформить заказ" isFullWidth />
      </div>
    </div>
  </Drawer>
);

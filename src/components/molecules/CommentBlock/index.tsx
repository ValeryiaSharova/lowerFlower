import React from 'react';

import { Comment, Props as PropsComment } from 'src/components/atoms/Comment';
import { Button } from 'src/components/molecules/Button';
import { Input } from 'src/components/molecules/Input';
import { Rating } from 'src/components/molecules/Rating';
import { TextArea } from 'src/components/molecules/TextArea';

import styles from 'src/components/molecules/CommentBlock/styles.module.css';

export type Props = {
  comments: PropsComment[];
  nameBouquet: string;
};

export const CommentBlock: React.FC<Props> = ({ comments, nameBouquet }) => (
  <div className={styles.wrapper}>
    {comments.length ? (
      <div className={styles.commentWrapper}>
        {comments.map((comment) => (
          <Comment {...comment} />
        ))}
      </div>
    ) : (
      <div className={styles.noComments}>Отзывов пока нет</div>
    )}
    <div>
      {comments.length ? (
        <div
          className={styles.getComments}
        >{`Оставьте свой отзыв на “${nameBouquet}”`}</div>
      ) : (
        <div
          className={styles.getComments}
        >{`Будьте первым, кто оставил отзыв на “${nameBouquet}”`}</div>
      )}
      <div className={styles.commentsDescription}>
        Ваш адрес email не будет опубликован. Обязательные поля помечены *
      </div>
    </div>
    <div className={styles.rateContainer}>
      <span className={styles.rate}>Ваша оценка:</span>
      <Rating rate={0} />
    </div>
    <div className={styles.formContainer}>
      <TextArea
        placeholder="Введите комментарий"
        isRequired
        label="Ваш отзыв"
      />
      <Input placeholder="Введите ваше имя" isRequired label="Имя" />
      <Input placeholder="Введите вашу почту" isRequired label="E-mail" />
      <div className={styles.buttonContainer}>
        <Button style="color" text="отправить" />
        <span className={styles.confidenceText}>
          Нажимая на кнопку «Отправить», я даю свое согласие на обработку
          персональных данных, в соответствии с &nbsp;
          <span className={styles.confidence}>
            Политикой конфиденциальности
          </span>
        </span>
      </div>
    </div>
  </div>
);

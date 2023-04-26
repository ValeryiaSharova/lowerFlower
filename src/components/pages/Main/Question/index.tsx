import { Highlight } from 'src/components/atoms/Highlight';
import { Title } from 'src/components/atoms/Title';
import { Button } from 'src/components/molecules/Button';
import { Input } from 'src/components/molecules/Input';
import { TextArea } from 'src/components/molecules/TextArea';

import lists from 'src/assets/images/lists.png';
import sign2 from 'src/assets/images/sign2.png';

import styles from 'src/components/pages/Main/Question/styles.module.css';

export const Question = () => (
  <div className={styles.questionWrapper}>
    <Highlight
      blur={125}
      color="pink"
      height={427}
      rotate={33}
      width={416}
      position="absolute"
      top={110}
      left={130}
    />
    <Highlight
      blur={125}
      color="green"
      height={286}
      rotate={33}
      width={245}
      position="absolute"
      top={310}
      left={430}
    />

    <img src={lists} alt="lists" className={styles.lists} />
    <div className={styles.questionContainer}>
      <div className={styles.questionTitle}>
        <Title title="остались" />
        <div className={styles.questionLine} />
      </div>
      <div className={styles.questionTitlePadding}>
        <Title title="вопросы?" />
        <div className={styles.questionText}>
          Отправьте ваш вопрос, заказ, предложение или жалобу через форму
          обратной связи, и наш специалист свяжется с вами в течение 15 минут.
        </div>
      </div>
      <div className={styles.questionFormContainer}>
        <img src={sign2} alt="sign2" className={styles.sign2} />
        <form className={styles.questionForm}>
          <Input placeholder="Ваше имя" isColor />
          <Input placeholder="+7 (977) 777-77-77" isColor />
          <TextArea placeholder="Ваш комментарий" isColor />
          <Button style="color" text="отправить" />
          <span className={styles.questionPolicy}>
            Нажимая на кнопку «Отправить», я даю свое согласие на обработку
            персональных данных, в соответствии с&nbsp;
            <span className={styles.questionLink}>
              Политикой конфиденциальности
            </span>
          </span>
        </form>
      </div>
    </div>
  </div>
);

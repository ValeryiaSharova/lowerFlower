import {
  Breadcrumbs,
  Props as BreadcrumbsProps,
} from 'src/components/atoms/Breadcrumbs';
import { Highlight } from 'src/components/atoms/Highlight';
import { Title } from 'src/components/atoms/Title';
import { Button } from 'src/components/molecules/Button';
import { Card } from 'src/components/molecules/Card';
import { Input } from 'src/components/molecules/Input';
import { TextArea } from 'src/components/molecules/TextArea';
import { Header } from 'src/components/organisms/Header';

import flower1 from 'src/assets/images/contacts1.png';
import flower2 from 'src/assets/images/contacts2.png';
import sign from 'src/assets/images/signContacts.png';

import styles from 'src/components/pages/Contacts/styles.module.css';

const breadcrumbsData: BreadcrumbsProps['items'] = [
  { content: 'Главная', link: '/' },
  { content: 'контакты', link: '/contacts' },
];

const cardData = [
  { title: 'время работы', description: 'с 10:00 до 21:00 без выходных' },
  { title: 'Адрес', description: 'г. Минск, ул. Тимирязева 67, комн. 112' },
  { title: 'Телефон', description: '+375 (29) 113-69-69' },
  { title: 'E-mail', description: 'zakaz@loverflower.by' },
];

export const Contacts = () => (
  <>
    <Header isFixed />
    <img src={flower1} alt="flower1" className={styles.flower1} />
    <img src={flower2} alt="flower2" className={styles.flower2} />
    <div className={styles.wrapper}>
      <Breadcrumbs items={breadcrumbsData} />
      <Title title="контакты" className={styles.title} />
      <div className={styles.cardWrapper}>
        {cardData.map((item) => (
          <Card
            type="contact"
            description={item.description}
            title={item.title}
            key={item.title}
          />
        ))}
      </div>
      <div className={styles.contactUsWrapper}>
        <div className={styles.contactUsInnerWrapper}>
          <div className={styles.firstInnerWrapper}>
            <Title title="напишите" />
            <div className={styles.line} />
          </div>
          <div className={styles.secondInnerWrapper}>
            <Title title="нам" />
            <div className={styles.contactUsDescription}>
              Отправьте ваш вопрос, заказ, предложение или жалобу через форму
              обратной связи, и наш специалист свяжется с вами в течение 15
              минут.
            </div>
          </div>
        </div>
        <div className={styles.form}>
          <img src={sign} alt="sign" className={styles.sign} />
          <Input placeholder="Ваше имя" />
          <Input placeholder="+7 (977) 777-77-77" />
          <TextArea placeholder="Ваш комментарий" />
          <Button style="color" text="отправить" />
          <span className={styles.confidence}>
            Нажимая на кнопку «Отправить», я даю свое согласие на обработку
            персональных данных, в соответствии с&nbsp;
            <span>Политикой конфиденциальности</span>
          </span>
        </div>
      </div>
    </div>
    <Highlight
      blur={125}
      color="red"
      height={220}
      rotate={-72}
      width={466}
      position="absolute"
      top={0}
      left={-150}
      zIndex={-1}
    />
    <Highlight
      blur={125}
      color="red"
      height={274}
      rotate={-72}
      width={341}
      position="absolute"
      top={0}
      right={-50}
      zIndex={-2}
    />
    <Highlight
      blur={125}
      color="red"
      height={125}
      rotate={-165}
      width={1006}
      position="absolute"
      top={500}
      left={450}
      zIndex={-1}
    />
    <Highlight
      blur={125}
      color="red"
      height={436}
      rotate={21}
      width={206}
      position="absolute"
      bottom={-900}
      zIndex={-1}
    />
    <Highlight
      blur={125}
      color="red"
      height={365}
      rotate={33}
      width={355}
      position="absolute"
      right={-50}
      bottom={-800}
      zIndex={-1}
    />
  </>
);

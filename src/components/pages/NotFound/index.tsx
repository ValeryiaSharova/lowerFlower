import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { Highlight } from 'src/components/atoms/Highlight';
import { Header } from 'src/components/organisms/Header';

import list1 from 'src/assets/images/404_flower1.png';
import list2 from 'src/assets/images/404_flower2.png';
import flower from 'src/assets/images/404_flower.png';
import sign from 'src/assets/images/sign404.png';

import styles from 'src/components/pages/NotFound/styles.module.css';

export const NotFound = () => (
  <div className={styles.wrapper}>
    <Header isFixed />
    <div className={styles.container}>
      <img src={flower} alt="flower" className={styles.flower} />
      <div className={styles.numberWrapper}>
        <span className={classNames(styles.number, styles.first)}>4</span>
        <span className={classNames(styles.number, styles.second)}>0</span>
        <span className={classNames(styles.number, styles.third)}>4</span>
      </div>
      <img src={sign} alt="sign" className={styles.sign} />
      <img src={list1} alt="list1" className={styles.list1} />
      <img src={list2} alt="list2" className={styles.list2} />
      <Highlight
        blur={125}
        color="blue"
        height={353}
        rotate={21}
        width={167}
        position="absolute"
        top={-200}
        right={0}
        zIndex={-1}
      />
      <div className={styles.highlight}>
        <Highlight
          blur={125}
          color="blue"
          height={200}
          rotate={21}
          width={283}
          position="absolute"
          zIndex={-1}
        />
        <Highlight
          blur={125}
          color="blue"
          height={200}
          rotate={21}
          width={283}
          zIndex={-1}
          right={0}
          position="absolute"
        />
      </div>
    </div>
    <div className={styles.content}>
      <span className={styles.text}>ошибка 404</span>
      <span className={styles.text}>Упс...Такой страницы нет</span>
      <Link to="/">
        <span className={styles.link}>На главную</span>
      </Link>
    </div>
  </div>
);

import { BigText } from 'src/components/atoms/BigText';
import { Highlight } from 'src/components/atoms/Highlight';
import { Icon } from 'src/components/atoms/Icon';

import sign3 from 'src/assets/images/sign3.png';

import styles from 'src/components/pages/Main/Social/styles.module.css';

export const Social = () => (
  <div className={styles.socialWrapper}>
    <div className={styles.socialContainer}>
      <div className={styles.socialImg}>
        <img src="https://i.ibb.co/QHm6wv0/Rectangle-44.png" alt="social1" />
        <img src="https://i.ibb.co/JrWsxp1/Rectangle-45.png" alt="social2" />
        <img src="https://i.ibb.co/wgZdfnG/Rectangle-46.png" alt="social3" />
        <img src="https://i.ibb.co/7JgxRjK/Rectangle-47.png" alt="social4" />
      </div>
      <div className={styles.socialLinks}>
        <img src={sign3} alt="sign3" className={styles.sign3} />
        <Icon icon="instagram" color="var(--color-green)" size={40} />
        <Icon icon="whatsUp" color="var(--color-green)" size={40} />
        <Icon icon="mobile" color="var(--color-green)" size={40} />
      </div>
    </div>
    <div className={styles.bigText}>
      <BigText text="instagram" floatPosition="left" />
    </div>
    <Highlight
      blur={125}
      color="green"
      height={211}
      rotate={21}
      width={100}
      position="absolute"
      zIndex={-1}
      top={500}
    />
    <Highlight
      blur={125}
      color="green"
      height={211}
      rotate={21}
      width={879}
      position="absolute"
      zIndex={-1}
      top={550}
      left={400}
    />
    <Highlight
      blur={125}
      color="pink"
      height={364}
      rotate={33}
      width={355}
      position="absolute"
      zIndex={-1}
      right={80}
      top={400}
    />
  </div>
);

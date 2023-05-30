import classNames from 'classnames';
import { useState } from 'react';

import { Arrow } from 'src/components/atoms/Arrow';

import styles from 'src/components/molecules/ScrollUp/styles.module.css';

export const ScrollUp = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled >= 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  window.addEventListener('scroll', toggleVisible);

  return (
    <button
      className={classNames(styles.scrollup, { [styles.showScroll]: visible })}
      id="scroll-up"
      type="button"
      onClick={scrollToTop}
    >
      <Arrow color="var(--color-green)" size="small" rotate={-90} />
    </button>
  );
};

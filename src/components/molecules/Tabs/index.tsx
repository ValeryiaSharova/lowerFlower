import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import TabUnstyled from '@mui/base/TabUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import { ReactNode } from 'react';

import styles from 'src/components/molecules/Tabs/styles.module.css';

export type Props = {
  title: { text: string; onChange?: () => void }[];
  content?: ReactNode[];
};

export const Tabs: React.FC<Props> = ({ title, content }) => (
  <TabsUnstyled defaultValue={0} className={styles.wrapper}>
    <TabsListUnstyled>
      {title.map((tab) => (
        <TabUnstyled key={tab.text} onChange={tab.onChange}>
          {tab.text}
        </TabUnstyled>
      ))}
    </TabsListUnstyled>
    {content &&
      content.map((component, index) => (
        <TabPanelUnstyled key={index} value={index}>
          {component}
        </TabPanelUnstyled>
      ))}
  </TabsUnstyled>
);

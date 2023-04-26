import { First } from 'src/components/pages/Main/First';
import { Info } from 'src/components/pages/Main/Info';
import { Order } from 'src/components/pages/Main/Order';
import { Popular } from 'src/components/pages/Main/Popular';
import { Question } from 'src/components/pages/Main/Question';
import { Reason } from 'src/components/pages/Main/Reason';
import { Social } from 'src/components/pages/Main/Social';

export const Main = () => (
  <>
    <First />
    <Info />
    <Popular />
    <Order />
    <Reason />
    <Question />
    <Social />
  </>
);

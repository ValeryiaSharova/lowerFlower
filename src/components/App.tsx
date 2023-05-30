import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Footer } from 'src/components/molecules/Footer';
import { ScrollUp } from 'src/components/molecules/ScrollUp';
import { About } from 'src/components/pages/About';
import { Card } from 'src/components/pages/Card';
import { Catalog } from 'src/components/pages/Catalog';
import { Contacts } from 'src/components/pages/Contacts';
import { CorpClients } from 'src/components/pages/CorpClients';
import { Delivery } from 'src/components/pages/Delivery';
import { Main } from 'src/components/pages/Main';
import { NotFound } from 'src/components/pages/NotFound';
import { Order } from 'src/components/pages/Order';
import { Provider } from 'src/components/providers/Provider';
import { ScrollToTop } from 'src/utils/scrollToTop';

export const App: React.FC = () => (
  <Provider>
    <ScrollToTop />
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/card/:id" element={<Card />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/corp" element={<CorpClients />} />
      <Route path="/delivery" element={<Delivery />} />
      <Route path="/" index element={<Main />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/order" element={<Order />} />
    </Routes>
    <Footer />
    <ScrollUp />
  </Provider>
);

import { Route, Routes } from 'react-router-dom';
import { HomePage } from './Pages/Home';
import { CompleteOrderPage } from './Pages/CompleteOrder';
import { DefaultLayout } from './layouts/DefaultLayout';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/CHLG-Coffee_Delivery-ROCKETSEAT' element={<HomePage />} />
        <Route path='/CHLG-Coffee_Delivery-ROCKETSEAT/completeOrder' element={<CompleteOrderPage />} />
      </Route>
    </Routes>
  );
}

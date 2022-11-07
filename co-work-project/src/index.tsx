import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import './index.css';
import Homepage from './pages/Homepage';
import ProductDetail from './pages/product/ProductDetail';
import Product from './pages/reservation/Product';
import Reservation from './pages/reservation/Reservation';
import ReservationIndex from './pages/reservation/ReservationIndex';
import SuccessPage from './pages/reservation/SuccessPage';
import SumbitForm from './pages/reservation/SumbitForm';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Homepage />} />
        <Route path="reservation" element={<ReservationIndex />}>
          <Route index element={<Reservation />} />
          <Route path="submitform" element={<SumbitForm />} />
          <Route path="product" element={<Product />} />
          <Route path="successpage" element={<SuccessPage />} />
        </Route>
        <Route path="productdetail" element={<ProductDetail />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

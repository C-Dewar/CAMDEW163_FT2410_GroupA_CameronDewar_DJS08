import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import '../server.js';
import Home from './Pages/Home';
import About from './Pages/About';
import Vans from './Pages/Vans/Vans.jsx';
import VanDetail from './Pages/Vans/VanDetail.jsx';
import Dashboard from './Pages/Host/Dashboard.jsx';
import Income from './Pages/Host/Income.jsx';
import Reviews from './Pages/Host/Reviews.jsx';
import Layout from './Components/Layout.jsx';
import '../server.js';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />
          <Route path="/host" element={<Dashboard />} />
          <Route path="/host/income" element={<Income />} />
          <Route path="/host/reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

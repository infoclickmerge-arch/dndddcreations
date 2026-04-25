import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductDetail } from './pages/ProductDetail';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { SmoothScroll } from './components/SmoothScroll';
import { BackToTop } from './components/BackToTop';
import { ScrollProgress } from './components/ScrollProgress';

export default function App() {
  return (
    <Router>
      <SmoothScroll>
        <ScrollProgress />
        <BackToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </SmoothScroll>
    </Router>
  );
}

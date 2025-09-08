import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Flix from './pages/Flix';
import Food from './pages/Food';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="flix" element={<Flix />} />
          <Route path="food" element={<Food />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

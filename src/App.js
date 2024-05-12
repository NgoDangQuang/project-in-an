import "./App.css";
import { Home } from "./screen/Home/Home";
import { MainLayout } from "./screen/MainLayout/MainLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Product } from "./screen/Products/Product";
import { Sticker } from "./screen/Sticker/Sticker";
import { Knowledge } from "./screen/Knowledge/Knowledge";
import { NotFound } from "./screen/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Product />} />
          <Route path="sticker" element={<Sticker />} />
          <Route path="knowledge" element={<Knowledge />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Contact } from "./screen/Contact/Contact";
import { Home } from "./screen/Home/Home";
import { Knowledge } from "./screen/Knowledge/Knowledge";
import { MainLayout } from "./screen/MainLayout/MainLayout";
import { NotFound } from "./screen/NotFound/NotFound";
import { Product } from "./screen/Products/Product";
import { ProductDetail } from "./screen/Products/ProductDetail";
import { Sticker } from "./screen/Sticker/Sticker";
import { NewProducts } from "./utils/newProducts";

function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true }}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="san-pham" element={<Product />} />
          <Route path="tem-nhan" element={<Sticker />} />
          <Route path="kien-thuc-in-an" element={<Knowledge />} />
          <Route path="lien-he" element={<Contact />} />
          <Route path="*" element={<NotFound />} />

          {Object.values(NewProducts)?.map((product) => (
            <Route
              key={product?.url}
              path={`san-pham/${product?.url}`}
              element={<ProductDetail data={product} />}
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

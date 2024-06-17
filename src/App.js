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
import { KienThucInAn } from "./utils/kienThucInAn";
import { KienThucInAnDetail } from "./screen/Knowledge/KienThucInAnDetail";
import { Products } from "./utils";
import { TemNhanDecal } from "./utils/temNhanDecal";

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
          <Route
            path={"san-pham/:itemId"}
            element={<ProductDetail dataProducts={Products} />}
          />

          {Object.values(KienThucInAn)?.map((item) => (
            <Route
              key={item?.url}
              path={`kien-thuc-in-an/${item?.url}`}
              element={<KienThucInAnDetail data={item} />}
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

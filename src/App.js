import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Contact } from "./screen/Contact/Contact";
import { Home } from "./screen/Home/Home";
import { KienThucInAnDetail } from "./screen/Knowledge/KienThucInAnDetail";
import { Knowledge } from "./screen/Knowledge/Knowledge";
import { MainLayout } from "./screen/MainLayout/MainLayout";
import { NotFound } from "./screen/NotFound/NotFound";
import { Product } from "./screen/Products/Product";
import { ProductDetail } from "./screen/Products/ProductDetail";
import { Products } from "./utils";
import ScrollToTop from "./screen/Home/ScrollToTop";

function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true }}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/san-pham" element={<Product />} />
          <Route path="/kien-thuc-in-an" element={<Knowledge />} />
          <Route path="/lien-he" element={<Contact />} />
          <Route path="/*" element={<NotFound />} />
          <Route
            path={"/san-pham/:itemId"}
            element={<ProductDetail dataProducts={Products} />}
          />

          <Route
            path="/kien-thuc-in-an/:itemId"
            element={<KienThucInAnDetail />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { Outlet, Link } from "react-router-dom";

export const MainLayout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/sticker">Sticker</Link>
          </li>
          <li>
            <Link to="/knowledge">Knowledge</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

import Counter from './features/counter/Counter';
import './App.css';
import Home from './pages/Home';
import ProductList from './features/product-list/components/ProductList';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import Login from './features/auth/components/Login';
import Signup from './features/auth/components/Signup';
import { createBrowserRouter,
         RouterProvider,
       Route} from 'react-router-dom';
import Cart from './features/cart/Cart';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import ProductDetailPage from './pages/ProductdetailPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: (
    <Home></Home>
    ),
  },
  {
    path: "/login",
    element: <div><Login></Login></div>,
  },
  {
    path: "/signup",
    element: <div><Signup></Signup></div>,
  },
  {
    path: "/cart",
    element: <div><CartPage></CartPage></div>,
  },
  {
    path: "/checkout",
    element: <div><Checkout></Checkout></div>,
  },
  {
    path: "/product-detail",
    element: <div><ProductDetailPage></ProductDetailPage></div>,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

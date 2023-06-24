import Counter from './features/counter/Counter';
import './App.css';
import Home from './pages/Home';
import ProductList from './features/product-list/ProductList';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import Login from './features/auth/components/Login';
import Signup from './features/auth/components/Signup';
import { createBrowserRouter,
         RouterProvider,
       Route} from 'react-router-dom';
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
]);

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      {/* <LoginPage></LoginPage> */}
      <RouterProvider router={router} />
      {/* <SignUpPage></SignUpPage>s */}
      {/* <ProductList/> */}
    </div>
  );
}

export default App;

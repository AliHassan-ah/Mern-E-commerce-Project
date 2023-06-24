import Counter from './features/counter/Counter';
import './App.css';
import Home from './pages/Home';
import ProductList from './features/product-list/ProductList';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      {/* <LoginPage></LoginPage> */}
      <SignUpPage></SignUpPage>
      {/* <ProductList/> */}
    </div>
  );
}

export default App;

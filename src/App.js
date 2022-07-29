import Nav from './UI/Nav';
import Footer from './UI/Footer';
import SignUp from './Component/SignUp';
import Login from './Component/Login';
import AddProduct from './Component/AddProduct';
import ProductList from './Component/ProductList';
import UpdateProduct from './Component/Updateproduct';
import PrivateComponent from './Component/PrivateComponent';
import './App.css';
import {BrowserRouter , Route , Routes} from 'react-router-dom';


function App() {
  
  return (
    <div className="App">
      <BrowserRouter> 
      <Nav/>
      <Routes> 
        <Route element={<PrivateComponent/>}>  
        <Route path="/" element={<h1> Hi i am home</h1>} /> {/* it shows private component(Outlet) or signUp */}
        <Route path="/product" element= {<ProductList/>} />
        <Route path="/add" element={<AddProduct/>} />
        <Route path="/UpdateProduct/:id" element={<UpdateProduct/>} />
        <Route path="/profile" element={<h1> Make Profile</h1>} />
        </Route>
        
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/logIn" element={<Login/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>  
    </div>
  );
}

export default App;

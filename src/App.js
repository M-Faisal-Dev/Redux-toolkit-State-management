
import './App.css'
import {
  BrowserRouter, Routes,
  Route,
} from "react-router-dom";
import Home from './component/Home';
import Cart from './component/Cart';
import NavBar from './component/NavBar';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (

<Provider store= {store}>
    <div className='App'>
 <BrowserRouter>
    <NavBar/>
 <Routes>
<Route path='/' element= {<Home/>}></Route>
<Route path='/cart' element= {<Cart/>}></Route>
 </Routes>
 
 </BrowserRouter>
 </div>
 </Provider>

  );

}

export default App;

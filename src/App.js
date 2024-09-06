import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import Header from './components/header';
import Footer from './components/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Admin from './pages/admin';
import Createproducts from './pages/create';

function App() {
  return (
    <div className="App">
      <Header/>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={   
     <Home/> }/>
      <Route path='/adminss' element={   
     <Admin/> }/>
  <Route path='/adminss/create' element={   
     <Createproducts/> }/>

    
    </Routes></BrowserRouter>
     <Footer/>
    </div>
  );
}

export default App;

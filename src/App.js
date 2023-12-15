import './App.css';
import './style/main.scss';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Error from "./pages/Error/Error";
import Logement from './pages/Logement/Logement';
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import Header from "./components/Header/Header";

function App() {
  return (
   
      
      <main>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path={'/'} element={<Home/>}></Route>
        <Route path="/about" element={<About />} />
        <Route path='logement/:id' element={<Logement />} />
        <Route path={'/404'} element={<Error/>}></Route>
        <Route path="*" element={<Navigate to="/404"/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </main>
    
    
  );
}

export default App;
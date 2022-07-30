import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NoMatch from './pages/NoMatch';
import Layout from './components/Layout';
import NavigationBar from './components/NavigationBar';
import Login from './pages/login';
import Signup from './pages/signup';
import Footer from './components/Footer';
import Products from './pages/Products';

const App = ()=>{
  return (
    <>
      <NavigationBar />
      <Layout>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/about"  element={<About/>} />
          <Route path="/contact"  element={<Contact/>} />
          <Route path="/login"  element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/products/:type" element={<Products/>}/>
          <Route path="*" element={<NoMatch/>} />
        </Routes>
      </Layout>
      <Footer/>
    </>
  );
}

export default App;

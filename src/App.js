import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home';
import About from './About';
import Update from './Update';
import Layout from './Layout';
import Service from './Service';
import Contect from './Contect';
import Blog from './Blog';
import Testimonial from './Testimonial';
import Product from './Product';
import Team from './Team';
import Client from './Client';

function App() {
  return (
    <div className="App">
          <BrowserRouter>
           <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/About'  element={<About/>} />
                    <Route path='/Update'  element={<Update/>} />
                    <Route path='/Service'  element={<Service/>} />
                    <Route path='/Contect'  element={<Contect/>} />
                    <Route path='/Blog'  element={<Blog/>} />
                    <Route path='/Client'  element={<Client />} />
                    <Route path='/Testimonial'  element={<Testimonial />} />
                    <Route path='/Product'  element={<Product />} />
                    <Route path='/Team'  element={<Team />} />

                </Route>   
           </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

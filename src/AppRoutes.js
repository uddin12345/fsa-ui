import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import NotFound from './NotFound';
import UserList from './users/UserList';
import Header from './Header';
import Footer from './Footer';
import Register from './Register';
const AppRoutes = () => <BrowserRouter>
<Header/>
<Register/>
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/users" element={<UserList/>}/>
    <Route path="*" element ={<NotFound/>}/>
</Routes>
<Footer/>
</BrowserRouter>
export default AppRoutes;
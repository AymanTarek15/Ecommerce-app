
import './App.css';
import { Route,RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

// import NavBar from './Components/NavBar';
import ProductsPage from './pages/productsPage';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import Contact from './pages/ContactUs';
import RootLayout from './pages/RootLayout';
import Categories from './pages/Categories';
import CheckOut from './pages/CheckOut';
import PersonalInfo from './pages/PersonalInfo';
import Details from './pages/Details';


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<RootLayout />}>
    <Route index element={<Home />}/>
    <Route path='products' element={<ProductsPage />}/>
    <Route path='/:id' element={<Categories />} />
    <Route path='/:id/:title' element={<Details />} />
    <Route path='about' element={<About />}/>
    <Route path='contact' element={<Contact />} />
    <Route path='checkout' element={<CheckOut />} />
    <Route path='checkout/personal-info' element={<PersonalInfo />} />
    <Route path='products/:title' element={<Details />} />
    <Route path='*' element={<Error />}/>

  </Route>
))



function App() {
  return ( <RouterProvider router={router}/> )
}

export default App;

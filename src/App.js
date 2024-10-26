
import './App.css';
import Banner from './components/Banner';
import BikeCollection from './components/BikeCollection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Header from './components/Header';
import Stripe from './components/Stripe';
import WhyTwo from './components/WhyTwo';
import Support from './components/Support'
import { Outlet, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import EarnWithUs from './components/EarnWithUs';



function App() {
  return (
   <div className='text-3xl'>
    <Stripe/>
    <Header/>
    {/* <Banner/>
    <BikeCollection/>
    <WhyTwo/> */}
    <Outlet/>
   
    <Footer/>
   </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
     
      { path: '/', element: <Home /> },
      { path: '/faq', element: <FAQ /> },
      { path: '/support', element: <Support /> },
      { path: '/earnwithus', element: <EarnWithUs /> },
     
      
    ],
  },
]);



export default App;

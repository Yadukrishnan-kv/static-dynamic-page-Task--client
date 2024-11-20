import React from 'react'
import HomePage from '../Pages/IndexPage/HomePage/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from '../Pages/IndexPage/About/About'
import SignupPage from '../Pages/AdminPages/LoginPage/SignupPage'
import Login from '../Pages/AdminPages/LoginPage/Login'
import AdminHome from '../Pages/AdminPages/AdminHomePage/AdminHome'
import Banner from '../Components/Banner/Banner'
import Banners from '../Pages/AdminPages/Home/Banner/Banners'
import Welcomenotes from '../Pages/AdminPages/Home/WelcomeNote/Welcomenotes'
import Clients from '../Pages/AdminPages/Home/Clients/Clients'
import Reviews from '../Pages/AdminPages/Home/Reviews/Reviews'
import News from '../Pages/AdminPages/Home/News/News'
import Services from '../Pages/AdminPages/Home/Services/Services'
import Profile from '../Pages/AdminPages/LoginPage/Profile'
import BannerView from '../Pages/AdminPages/Home/Banner/BannerView'
import WelcomeNoteView from '../Pages/AdminPages/Home/WelcomeNote/WelcomeNoteView'
import ClientEdit from '../Pages/AdminPages/Home/Clients/ClientEdit'
import ServiceView from '../Pages/AdminPages/Home/Services/ServiceView'
import ReviewView from '../Pages/AdminPages/Home/Reviews/ReviewView'
import NewsEdit from '../Pages/AdminPages/Home/News/NewsEdit'
import CompanyEdit from '../Pages/AdminPages/AboutPage/ComapnyEdit'
import CompanyView from '../Pages/AdminPages/AboutPage/CompanyView'
import ServicesPage from '../Pages/IndexPage/ServicesPage/ServicesPage'
import GalleryPage from '../Pages/IndexPage/GalleryPage/GalleryPage'
import Faqpage from '../Pages/IndexPage/FaqPage/Faqpage'
import ContactUsPage from '../Pages/IndexPage/ContactUsPage/ContactUsPage'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import ServiceEdit from '../Pages/AdminPages/ServicePage/ServiceEdit'
import ServiceViews from '../Pages/AdminPages/ServicePage/ServiceViews'
import GalleryView from '../Pages/AdminPages/GalleryPage/GalleryView'
import GalleryEdit from '../Pages/AdminPages/GalleryPage/GalleryEdit'
import FaqEdit from '../Pages/AdminPages/FaqPage/FaqEdit'
import FaqView from '../Pages/AdminPages/FaqPage/FaqView'
import ContactEdit from '../Pages/AdminPages/ContactUsPage/ContactEdit'
import ContactUsView from '../Pages/AdminPages/ContactUsPage/ContactUsView'
import EmailView from '../Pages/AdminPages/ContactUsPage/EmailView'
import AboutPageNav from '../Components/AboutPageNav/AboutPageNav'
import Nav from '../Components/Nav/Nav'
import TeamEdit from '../Pages/AdminPages/AboutPage/TeamEdit'
import TeamView from '../Pages/AdminPages/AboutPage/TeamView'

function Router() {
  return (
    <div>
        <BrowserRouter>
        
        <Routes>
            <Route path='/' element={ <><Nav/><HomePage/></> }></Route>
            <Route path='/About' element={ <><AboutPageNav/><About/></> }></Route>
            <Route path='/Home' element={ <><Nav/><HomePage/></> }></Route>
            <Route path='/ServicesPage' element={ <><AboutPageNav/><ServicesPage/><Footer/></> }></Route>
            <Route path='/GalleryPage' element={ <><AboutPageNav/><GalleryPage/><Footer/></> }></Route>
            <Route path='/FaqPage' element={ <><AboutPageNav/><Faqpage/><Footer/></> }></Route>
            <Route path='/ContactUsPage' element={ <><AboutPageNav/><ContactUsPage/><Footer/></> }></Route>
            <Route path='/Login' element={ <><Login/></> }></Route>

            <Route path='/AdminHome' element={ <><AdminHome/></> }></Route>
            <Route path='/profile' element={ <><Profile/></> }></Route>

            <Route path='/Bannerview' element={ <><BannerView/></> }></Route>
            <Route path='/BannerEdit/:id' element={ <><Banners/></> }></Route>
            <Route path='/Welcomenotes' element={ <><WelcomeNoteView/></> }></Route>
            <Route path='/welcomeNoteEdit/:id' element={ <><Welcomenotes/></> }></Route>
            <Route path='/Clients' element={ <><Clients/></> }></Route>
            <Route path='/ClientEdit/:id' element={ <><ClientEdit/></> }></Route>
            <Route path='/Services' element={ <><ServiceView/></> }></Route>
            <Route path='/ServicesEdit/:id' element={ <><Services/></> }></Route>
            <Route path='/reviews' element={ <><ReviewView/></> }></Route>
            <Route path='/reviewsEdit/:id' element={ <><Reviews/></> }></Route>
            <Route path='/News' element={ <><NewsEdit/></> }></Route>
            <Route path='/NewsEdit/:id' element={ <><News/></> }></Route>

            <Route path='/Company' element={ <><CompanyView/></> }></Route>
            <Route path='/CompanyEdit/:id' element={ <><CompanyEdit/></> }></Route>
            <Route path='/Team' element={ <><TeamView/></> }></Route>
            <Route path='/TeamEdit/:id' element={ <><TeamEdit/></> }></Route>


            <Route path='/Service' element={ <><ServiceViews/></> }></Route>
            <Route path='/ServiceEdit/:id' element={ <><ServiceEdit/></> }></Route>

            <Route path='/Gallery' element={ <><GalleryEdit/></> }></Route>
            <Route path='/GalleryEdit/:id' element={ <><GalleryView/></> }></Route>

            <Route path='/Faq' element={ <><FaqView/></> }></Route>
            <Route path='/FaqEdit/:id' element={ <><FaqEdit/></> }></Route>

            <Route path='/ContactUs' element={ <><ContactUsView/></> }></Route>
            <Route path='/ContactEdit/:id' element={ <><ContactEdit/></> }></Route>
            <Route path='/emailView' element={ <><EmailView/></> }></Route>





           
            
            
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router
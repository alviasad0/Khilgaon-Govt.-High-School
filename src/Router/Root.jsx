import { Outlet } from 'react-router-dom';
import TopLoginBtn from '../Pages/Home Page/Compoents/TopLoginBtn';
import Header from '../Pages/Home Page/Compoents/Header';
import Navbar from '../Pages/Home Page/Compoents/Navbar';
import Announcements from '../Pages/Home Page/Compoents/Announcements';
import Footer from '../Pages/Home Page/Compoents/Footer';

const Root = () => {
    return (
      <div>
        <TopLoginBtn></TopLoginBtn>
        <Header></Header>
        <Announcements></Announcements>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    );
};

export default Root;
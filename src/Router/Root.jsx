import { Outlet } from 'react-router-dom';
import TopLoginBtn from '../Pages/Home Page/Compoents/TopLoginBtn';
import Header from '../Pages/Home Page/Compoents/Header';
import Navbar from '../Pages/Home Page/Compoents/Navbar';
import Announcements from '../Pages/Home Page/Compoents/Announcements';

const Root = () => {
    return (
      <div>
        <TopLoginBtn></TopLoginBtn>
        <Header></Header>
        <Announcements></Announcements>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    );
};

export default Root;
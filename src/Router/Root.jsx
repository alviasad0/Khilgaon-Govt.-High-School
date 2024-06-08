import { Outlet } from 'react-router-dom';
import TopLoginBtn from '../Pages/Home Page/Compoents/TopLoginBtn';
import Header from '../Pages/Home Page/Compoents/Header';
import Navbar from '../Pages/Home Page/Compoents/Navbar';

const Root = () => {
    return (
      <div>
          <TopLoginBtn></TopLoginBtn>
          <Header></Header>
          <Navbar></Navbar>
          <Outlet></Outlet>  
        </div>
    );
};

export default Root;
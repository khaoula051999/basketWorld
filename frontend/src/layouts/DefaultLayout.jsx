import React from 'react';
import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
const DefaultLayout = () => {
  return (
    <div>
        <Header/>
        <main>
            <Outlet />
        </main>
        <Footer/>
    </div>
  )
}

export default DefaultLayout
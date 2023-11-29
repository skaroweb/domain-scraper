import React from "react";
import { Outlet } from "react-router-dom";
import "./index.css";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="main">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;

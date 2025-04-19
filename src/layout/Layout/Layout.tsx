import React from "react";
import styles from "./Layout.module.scss";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.contentWrapper}>
        <Header />
        <main className={styles.main}>
          <Outlet /> 
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
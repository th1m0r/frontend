import './pages/template/dependencies'
import React from 'react';
import { HashRouter } from "react-router-dom";

import Header from "./pages/template/header";
import SideBar from "./pages/template/sidebar";
import Footer from "./pages/template/footer";
import Routes from "./routes";

function App() {
  return (
    <HashRouter>
      <Header />
      <SideBar />
      <Routes />
      <Footer />
    </HashRouter>
  );
}

export default App;

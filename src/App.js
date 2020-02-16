import React from 'react';
import { HashRouter } from "react-router-dom";

import Header from "./pages/template/header";
import SideBar from "./pages/template/sidebar";
import Footer from "./pages/template/footer";
import Routes from "./routes";

//import './pages/template/dependencies'
/* Essa pagina iniciando primeiro as dependencias do leiaute ficam aqui */ 

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

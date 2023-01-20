import React from 'react';
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Aos from "aos";
// import "@ant - design/flowchart/dist/index.css";
import { useEffect } from "react";
import IndexRoutes from './Routes/IndexRoutes';
import LayoutProvider from './Context/LayoutContext';
// import "antd/dist/antd.css";

function App() {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <div className="app">
      <LayoutProvider>

        <IndexRoutes />
      </LayoutProvider>
    </div>
  );
}


export default App;

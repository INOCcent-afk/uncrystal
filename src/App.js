import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Footer from "./components/Footer";
import PriceList from "./components/pages/PriceList";
import ScrollToTop from "./components/ScrollToTop";
import AboutUs from "./components/pages/AboutUs";
import Product from "./components/pages/Products";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/pricelist" exact component={PriceList} />
            <Route path="/aboutus" exact component={AboutUs} />
            <Route path="/product" exact component={Product} />
            <Route path="/contact" exact component={Contact} />
          </Switch>
          <Footer />
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;

/* eslint-disable react/jsx-pascal-case */
import "./App.css";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Hero_Spacer from "./components/Hero_Spacer";
import Product_Services from "./components/Product_Services";
import Pros from "./components/Pros";
import QuantitySpacer from "./components/QuantitySpacer";
import Demo from "./components/Demo";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Hero />
      <Hero_Spacer
        title='Live chat is only the beginning'
        text='Set clear expectations with customers based on your teams bandwidth, and collect upfront information for follow-up later.'
      />
      <Product_Services />
      <Pros />
      <QuantitySpacer />
      <Demo />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

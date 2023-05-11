/* eslint-disable react/jsx-pascal-case */
import "./App.css";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Hero_Spacer from "./components/Hero_Spacer";

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Hero />
      <Hero_Spacer
        title='Live chat is only the beginning'
        text='Set clear expectations with customers based on your teams bandwidth, and collect upfront information for follow-up later.'
      />
    </div>
  );
}

export default App;

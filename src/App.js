import "./App.scss";
import About from "./component/About/About";
import Clients from "./component/Clients/Clients";
import Contact from "./component/Contact/Contact";
import Experience from "./component/Experience/Experience";
import Hero from "./component/Hero/Hero";
import Navbar from "./component/Navbar/Navbar";
import Posts from "./component/Posts/Posts";
import Pricing from "./component/Pricing/Pricing";
import Service from "./component/Service/Service";
import Work from "./component/Work/Work";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Experience />
      <Work />
      <Pricing />
      <Clients />
      <Posts />
      <Contact />
    </div>
  );
}

export default App;

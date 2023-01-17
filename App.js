import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import FreeLancer from "./components/FreeLancer";
import Reviews from "./components/Reviews";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Services />
      <FreeLancer />
      <Work />
      <Reviews />
      <Contact />
    </div>
  );
}

export default App;

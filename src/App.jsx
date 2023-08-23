import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MyProjects from "./components/MyProjects";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <MyProjects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

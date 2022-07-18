import Header from "./component/Header";
import Features from "./component/Features/Features";
import Home from "./component/Home";
import Portfolio from "./component/Portfolio/Projects";
import Resume from "./component/Resume/Resume";
import Testimonial from "./component/Testimonial/Testimonial";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import "./App.scss";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Features />
      <Portfolio />
      <Resume />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  )
}

export default App

import Navbar from "./components/Navbar";
import Menu from "./components/navbar-pages/Menu";
// import About from "./components/navbar-pages/About";
import Contact from "./components/navbar-pages/Contact";
import Footer from "./components/navbar-pages/Footer";
import './styles/App.css';

function App() {

  const showPage = () => {
    switch (window.location.pathname) {
      case "/menu":
        return <Menu />
      case "/about":
        return <Contact />
      case "/contact":
        return <Contact />
      default:
        return 
    }
  }
  
  return (
    <>
      <Navbar />
      {showPage()}
      <Footer />
    </>
  );
}

export default App;

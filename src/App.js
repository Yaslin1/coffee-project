import Navbar from "./components/Navbar";
import Menu from "./components/navbar-pages/Menu";
import About from "./components/navbar-pages/About";
import Contact from "./components/navbar-pages/Contact";
import './styles/App.css';

function App() {

  const showPage = () => {
    switch (window.location.pathname) {
      case "/menu":
        return <Menu />
      case "/about":
        return <About />
      case "/contact":
        return <Contact />
      default:
        return <h1 style={{color: 'black'}}>No Home page yet doe</h1>
    }
  }
  
  return (
    <>
      <Navbar />
      {showPage()}
    </>
  );
}

export default App;

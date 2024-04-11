import logo from './logo.svg';
import './App.css';
import { NavBar } from './templates/NavBar';
import './assets/css/main.css'
import { Menu } from './templates/Menu';
import { Footer } from './templates/Footer';


function App() {
  return (
    <>
      <NavBar/>
      <Menu />
      <Footer />
    </>
  );
}

export default App;

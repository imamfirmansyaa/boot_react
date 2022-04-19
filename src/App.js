import './App.css';
import '../src/Assets/css/homepage.css'
import '../src/Assets/css/utilities.css'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer'
import Home from './Pages/Home';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Footer/>
    </>
  );
}

export default App;

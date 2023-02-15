import Contact from './Components/Contact';
import CallToActionWithIllustration, { Home, Illustration } from './Components/Home';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <CallToActionWithIllustration/>
      <Contact/>
    </div>
  );
}

export default App;

import './App.scss';
import Line from './components/beetwenLine/Line';
import Main1 from './components/main1/Main1';
import Main1Bottom from './components/main1_bottom/Main1Bottom';
import Main2 from './components/main2/Main2';
import Main2Bottom from './components/main2Bottom/Main2Bottom';
import Main3 from './components/main3/Main3';
import Main4 from './components/main4/Main4';
import Main5 from './components/main5/Main5';
import Main6 from './components/main6/Main6';
import Main6Bottom from './components/main6_bottom/Main6Bottom';
import Main7 from './components/main7/Main7';
import Main8 from './components/main8/Main8';
import Navbar from './components/navbar/Navbar';
import NavTop from './components/navbarTop/NavTop';
import Map from "./components/map/Map"
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <NavTop />
      <Navbar />
      <Main1 />
      <Main1Bottom />
      <Line />
      <Main2 />
      <Main2Bottom />
      <Main3 />
      <Main4 />
      <Main5 />
      <Main6 />
      <Main6Bottom />
      <Main7 />
      <Main8 />
      <Map />
      <Footer />
    </div>
  );
}

export default App;

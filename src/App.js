import Navbar from "./components/Navbar";
import "./App.css"
import Intro from "./components/intro/Intro";
import Services from "./components/Services/Services";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services />
    </div> 
  );
}

export default App;

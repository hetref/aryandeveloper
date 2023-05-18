import "./App.css";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <>
      <div className="App">
        <div id="sitewrapper">
          <div id="webwrapper">
            <NavBar />
            <Home />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

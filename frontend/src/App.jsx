import "./App.css";
import Navbar from "./components/Navbar";
import Cream from "./assets/creames.png";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex px-20 py-20">
        <div>
          <h2 className="font-bold">Skincare - Real reviews, Real Routines</h2>
          <h4>
            Discover what skincare people actually use. No ads, no bots, just
            honest experiences.
          </h4>
        </div>
        <div>
          <img className="w-30 h-30" src={Cream} alt="" />
        </div>
      </div>
      <div>
        <h1>Discover the best ranked skincare products</h1>
        <h2>Highest-Ranking Products from our community</h2>
      </div>
    </>
  );
}

export default App;

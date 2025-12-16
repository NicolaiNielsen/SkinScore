import "./App.css";
import Navbar from "./components/Navbar";
import Cream from "./assets/creames.png";
import Leaderboard from "./components/Leaderboard";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex px-20 py-20">
        <div>
          <input
            className="bg-black p-10 text-white"
            type="text"
            placeholder="search for a product"
          />
          <button className="bg-blue-50 p-10">Search for a product</button>

          <h2 className="font-bold">Skincare - Real reviews, Real Routines</h2>
          <h4>
            Discover what skincare people actually use. No ads, no bots, just
            honest experiences.cd
          </h4>
        </div>
        <div>
          <img className="w-30 h-30" src={Cream} alt="" />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="font-bold">
          Discover the best ranked skincare products
        </h1>
        <h2>Highest-Ranking Products from our community</h2>
      </div>
      <Leaderboard></Leaderboard>
    </>
  );
}

export default App;

import "./App.css";
import Navbar from "./components/Navbar";
import Leaderboard from "./components/Leaderboard";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="text-center p-10">
        <h2 className="font-bold font-sans text-xl">
          Skincare - Real reviews, Real Routines
        </h2>
        <h4>
          Discover what skincare people actually use. No ads, no bots, just
          honest experiences.
        </h4>
      </div>
      <div className="flex justify-center items-center gap-4">
        <input
          className="bg-white px-4 py-2 rounded-md border-[5px] border-[#DBE2EF] text-black focus:outline-none shadow-md"
          type="text"
          placeholder="search for a product"
        />
        <button className="bg-blue-100 px-5 py-3 rounded-md font-sans text-black shadow-md hover:shadow-lg transition duration-200">
          Search for a product
        </button>
      </div>

      <div className="m-10 flex flex-wrap justify-center gap-4">
        <button className="bg-blue-100 px-5 py-1 rounded-md font-sans text-black shadow-md hover:shadow-lg transition duration-200">
          Cleanser
        </button>
        <button className="bg-blue-100 px-5 py-1 rounded-md font-sans text-black shadow-md hover:shadow-lg transition duration-200">
          Sunscreens
        </button>
        <button className="bg-blue-100 px-5 py-1 rounded-md font-sans text-black shadow-md hover:shadow-lg transition duration-200">
          Serums & Essences
        </button>
        <button className="bg-blue-100 px-5 py-1 rounded-md font-sans text-black shadow-md hover:shadow-lg transition duration-200">
          Toners
        </button>
        <button className="bg-blue-100 px-5 py-1 rounded-md font-sans text-black shadow-md hover:shadow-lg transition duration-200">
          Moisturizers
        </button>
        <button className="bg-blue-100 px-5 py-1 rounded-md font-sans text-black shadow-md hover:shadow-lg transition duration-200">
          All
        </button>
      </div>
      <div className="m-0">
        <Leaderboard></Leaderboard>
        <Leaderboard></Leaderboard>
        <Leaderboard></Leaderboard>
        <Leaderboard></Leaderboard>
        <Leaderboard></Leaderboard>
        <Leaderboard></Leaderboard>
      </div>
      <Footer />
    </>
  );
}

export default App;

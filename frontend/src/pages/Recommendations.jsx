import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState } from "react";

function Recommendations() {
  const [skinConcerns, setSkinConcerns] = useState([]);
  const [showRecommendation, setShowRecommendation] = useState(false);

  function toggleRecommendations() {
    setShowRecommendation((prev) => !prev);
  }

  function addToConcerns(e) {
    e.preventDefault(); // Prevent page reload
    const newConcern = e.target.skinconcerns.value.trim();
    if (newConcern) {
      setSkinConcerns((prev) => [...prev, newConcern]);
      e.target.reset(); // clear input after adding
    }
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center mt-10 mb-10">
        <h1 className="font-bold font-sans text-xl">
          Search for skincare recommendations
        </h1>
        <h4>Enter different skincare concerns and get recommended products.</h4>
        <div className="flex flex-row space-x-5 mt-10">
          <form className="space-x-5" onSubmit={addToConcerns}>
            <input
              className="bg-slate-400 rounded-md pt-2 pb-2 pl-4 pr-4 text-white placeholder-gray-50"
              type="text"
              placeholder="Enter skin concern"
              name="skinconcerns"
            />
            <button className="pt-2 pb-2 pl-4 pr-4 text-white bg-slate-400 rounded-md">
              Add
            </button>
          </form>
        </div>
      </div>

      {/* Only show the list if there are concerns */}
      {skinConcerns.length > 0 && (
        <div className="mb-10 ml-7 mr-7">
          <h2 className="font-bold font-sans text-l">
            List of skincare concerns
          </h2>
          <ul className="list-disc pl-5">
            {skinConcerns.map((concern, index) => (
              <li key={index}>{concern}</li>
            ))}
          </ul>
          {/* Generate box */}

          <div className="bg-slate-500 rounded-md h-28 mt-9 flex flex-row  justify-between items-center p-10">
            <div className="flex flex-col">
              <h1 className="font-bold">
                Tryk her for at genere skinrecommendations
              </h1>
              <p>Vi giver dig en personlig hudpleje routine</p>
            </div>
            <div>
              <button
                className="bg-slate-400 rounded-md px-6 py-3 text-center"
                onClick={toggleRecommendations}
              >
                Show Recommendations
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Skincare recommendations */}
      {showRecommendation && (
        <div>
          <h1>Skincare recommendations based on your concerns</h1>
        </div>
      )}

      <Footer />
    </>
  );
}

export default Recommendations;

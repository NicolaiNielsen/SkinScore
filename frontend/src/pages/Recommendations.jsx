import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Resposne from "../components/Response";
import { useState } from "react";
import Skinconcerns from "../components/Skinconcerns";
import { getSkincare } from "../../../backend/AI";

function Recommendations() {
  const [skinConcerns, setSkinConcerns] = useState([]);
  const [showRecommendation, setShowRecommendation] = useState(false);
  const [recommendation, setRecommendation] = useState("");
  const [loading, setLoading] = useState(false);

  function toggleRecommendations() {
    setShowRecommendation((prev) => !prev);
  }

  async function getRecommendation() {
    const response = await getSkincare(skinConcerns);
    console.log(response);
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
        <Skinconcerns
          getRecommendation={getRecommendation}
          skinConcerns={skinConcerns}
        />
      )}

      {/* Skincare recommendations */}
      {showRecommendation && <Response />}

      <Footer />
    </>
  );
}

export default Recommendations;

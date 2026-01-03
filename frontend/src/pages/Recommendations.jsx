import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Response from "../components/Response";
import Skinconcerns from "../components/Skinconcerns";
import { useState } from "react";

function Recommendations() {
  const [skinConcerns, setSkinConcerns] = useState([]);
  const [recommendation, setRecommendation] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getRecommendation() {
    try {
      setLoading(true);

      const res = await fetch("http://localhost:3000/api/products");
      const data = await res.json();

      console.log("Backend response:", data);
      setRecommendation(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  function addToConcerns(e) {
    e.preventDefault();
    const newConcern = e.target.skinconcerns.value.trim();
    if (newConcern) {
      setSkinConcerns((prev) => [...prev, newConcern]);
      e.target.reset();
    }
  }

  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center mt-10">
        <h1 className="text-xl font-bold">Search skincare recommendations</h1>
        <form onSubmit={addToConcerns} className="mt-6 space-x-4">
          <input
            name="skinconcerns"
            placeholder="Enter skin concern"
            className="bg-slate-300 p-2 rounded"
          />
          <button className="bg-slate-600 text-white p-2 rounded">Add</button>
        </form>

        {skinConcerns.length > 0 && (
          <Skinconcerns
            skinConcerns={skinConcerns}
            getRecommendation={getRecommendation}
          />
        )}
        {loading && <p>Loading...</p>}

        <Response recommendation={recommendation} />
      </div>
      {Array.isArray(recommendation) ? (
        recommendation.map((rec, index) => <p key={index}>{rec.message}</p>)
      ) : (
        <p>{recommendation.message}</p>
      )}
      <Footer />
    </>
  );
}

export default Recommendations;

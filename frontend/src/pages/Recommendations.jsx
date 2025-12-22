import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState } from "react";

function Recommendations() {
  const [skinConcerns, setSkinConcerns] = useState([]); //using set also causes rerendering of the componenet, how is it possiblre for react to rerender the component withouth the page?
  const [showRecommendation, setShowRecommendation] = useState(false);

  function toggleRecommendations() {
    setShowRecommendation((prev) => !prev);
  }

  function addToConcerns(formData) {
    const newConcern = formData.get("skinconcerns");

    // Update the state by creating a new array
    setSkinConcerns((prev) => [...prev, newConcern]); //this is a function that get returned like a setter
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
          <form className="space-x-5" action={addToConcerns}>
            <input
              className="bg-slate-400 rounded-md pt-2 pb-2 pl-4 pr-4 text-white placeholder-gray-50"
              type="text"
              placeholder="enter skinconcerns"
              name="skinconcerns"
            ></input>
            <button className="pt-2 pb-2 pl-4 pr-4 text-white bg-slate-400 rounded-md">
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="mb-10 ml-7">
        <h2 className="font-bold font-sans text-l">
          List of skincare concerns
        </h2>
        <ul className="list-disc pl-5">
          {skinConcerns.map((concern) => (
            <li>{concern}</li>
          ))}
        </ul>
      </div>
      <button onClick={toggleRecommendations}>tetss</button>
      {showRecommendation === true && (
        <div>
          <h1>Skinscare recommendations based on your concerns</h1>
        </div>
      )}
      <Footer />
    </>
  );
}

export default Recommendations;

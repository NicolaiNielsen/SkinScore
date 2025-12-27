export default function Skinconcerns(props) {
  return (
    <div className="mb-10 ml-7 mr-7">
      <h2 className="font-bold font-sans text-l">List of skincare concerns</h2>
      <ul className="list-disc pl-5">
        {props.skinConcerns.map((concern, index) => (
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
            onClick={props.toggleRecommendations}
          >
            Show Recommendations
          </button>
        </div>
      </div>
    </div>
  );
}

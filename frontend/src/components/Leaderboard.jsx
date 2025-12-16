import Cream from "../assets/creames.png";

function Leaderboard() {
  return (
    <div className="bg-blue-100 flex flex-row px-10 py-4 space-x-5 justify-between max-w-lg w-full mx-auto rounded-md m-2">
      <img className="max-h-10" src={Cream} alt="product image" />
      <p>Product name</p>
      <p>Average rating 3.8/5</p>
      <p>Rated 3230 times</p>
    </div>
  );
}

export default Leaderboard;

import Cream from "../assets/creames.png";

function Leaderboard() {
  return (
    <div>
      <div className="p-10">
        <div className="bg-blue-500 flex flex-row p-5 space-x-5 justify-between max-w-md w-full mx-auto rounded-md">
          <img className="max-h-10" src={Cream} alt="product image" />
          <p>Product name</p>
          <p>Average rating 3.8/5</p>
          <p>Rated 3230 times</p>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;

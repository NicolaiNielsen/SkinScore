import Cream from "../assets/creames.png";

function Leaderboard(props) {
  return (
    <div className="bg-blue-100 flex flex-row px-10 py-4 space-x-5 justify-between items-center max-w-lg w-full mx-auto rounded-md m-2">
      <img
        className="w-12 h-12 object-cover"
        src={props.imgurl}
        alt="product image"
      />
      <p>{props.productname}</p>
      <p>Average rating {props.rating}</p>
      <p>Rated {props.numberofratings} times</p>
    </div>
  );
}

export default Leaderboard;

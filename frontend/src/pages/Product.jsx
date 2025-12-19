import Navbar from "../components/Navbar";
import ProductImg from "../assets/Torridon.webp";

function Product() {
  return (
    <>
      <Navbar />
      <div className="w-full max-w-[700px] bg-slate-200 p-6 rounded mx-auto mt-4">
        <h1 className="font-bold font-sans">Product Name</h1>
        <div className="flex flex-col md:flex-row md:space-x-10 space-y-6 md:space-y-0">
          <img
            className="rounded-md max-w-[150px] mt-4"
            src={ProductImg}
            alt="image of product"
          />
          <div className="max-h-100 max-w-100 bg-green-500 mt-4 rounded-md">
            <p>
              LOOOOOOOOOGNDSJFnsjf sdbf geryysdgfshfsbdfsdhfgshdfsdfhsg shdgf
              hsdgf sahsdjahdshasdj
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;

import Navbar from "../components/Navbar";
import ProductImg from "../assets/Torridon.webp";
import Footer from "../components/Footer";

function Product() {
  return (
    <>
      <Navbar />
      <div className="w-full max-w-[700px] bg-slate-200 p-6 rounded mx-auto mt-4">
        <h1 className="font-bold font-sans">Torridon</h1>
        <h1 className="font-bold font-sans">
          DIVE-IN Low Molecular Hyaluronic Acid Skin Booster
        </h1>

        {/* Image + Text Section */}
        <div className="flex flex-col md:flex-row md:space-x-5 items-stretch mt-4">
          {/* Image */}
          <img
            className="rounded-md w-[150px] object-cover"
            src={ProductImg}
            alt="image of product"
          />

          {/* Textbox */}
          <div className="bg-white rounded-md p-4 flex-1 flex flex-col justify-between mt-4 md:mt-0">
            <p>
              En tyk toner med 5 forskellige typer hyaluronsyre for en hydreret
              og fugtet hud,
            </p>
          </div>
        </div>

        {/* Additional Text Sections */}
        <div className="bg-white mt-4 rounded-md p-4">
          <p>
            En tyk toner med 5 forskellige typer hyaluronsyre for en hydreret og
            fugtet hud,
          </p>
        </div>
      </div>

      <div className="w-full max-w-[700px] bg-slate-200 p-6 rounded mx-auto mt-4">
        <h1>Nicolai N</h1>
        <p className="mt-4">
          this product is great for my dry and sensitive skin, especially in the
          winter. i’ve never encountered another moisturizer with this texture.
          it’s rich but doesn’t feel heavy or oily when applied and absorbs
          super fast. the one downside is the price. it’s definitely one of the
          more expensive moisturizers at olive young. it was actually less
          expensive at sephora in the U.S. which is usually not the case. i
          apply multiple layers at night to lock in moisture and strengthen my
          skin barrier but i think people with oilier skin could still use this
          in smaller amounts
        </p>
      </div>
      <Footer />
    </>
  );
}

export default Product;

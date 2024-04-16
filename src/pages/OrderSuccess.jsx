import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";
function OrderSuccess() {
  return (
    <>
      <div className="w-screen h-full bg-[#EDC35C]">
        <Navbar />
        <div className="px-16 py-28 flex justify-center">
          <div className="flex justify-center w-full font-bold">
            <div className="text-center  grid gap-5 h-fit">
              <h1 className="text-4xl text-white font-bold">Thank You</h1>
              <h1 className="text-4xl text-white font-bold">For Your</h1>
              <h1 className="text-4xl text-white font-bold">Order !!</h1>
              <h1 className="text-lg text-white font-bold">Please Chat Admin For The Information</h1>
            </div>
          </div>
        </div>
        <div className="justify-center flex ">
          <Link className="m-8 font-bold hover:bg-black hover:rounded-lg hover:shadow-md p-2 text-white">
            Back to Home
          </Link>
          </div>
      </div>
      <Footer/>
    </>
  );
}

export default OrderSuccess;

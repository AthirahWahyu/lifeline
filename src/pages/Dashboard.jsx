import { IoMdHome } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import ImageDashboard from "../assets/img/Dashboard.png";
import ImageDashboardText from "../assets/img/DashboardText.png";
import ImageLogo from "../assets/img/Logo.png";
import ImageLogoSewa from "../assets/img/LogoSewa.png";
import { AiOutlineMail } from "react-icons/ai";
import { TbPhoneCalling } from "react-icons/tb";
import { BsInstagram } from "react-icons/bs";
import { IoLogoTiktok } from "react-icons/io5";

function Dashboard() {
  return (
    <>
      {/* Page Dashborad */}
      <div className="w-screen h-full bg-[#EDC35C]">
        <div className="w-full bg-white h-fit flex py-2 px-6 justify-between drop-shadow-lg">
          <div className="flex">
            <Link className="m-2">Camera</Link>
            <Link className="m-2">Location</Link>
            <Link className="m-2">About</Link>
          </div>
          <div className="py-2 absolute m-auto left-1/2  ">
            <div className="font-semibold text-xl uppercase tracking-[.25em]">
              Lifeline
            </div>
          </div>
          <Link className="flex items-center p-0 m-2 px-6">
            <IoMdHome fontSize="1.75rem" />
            <IoCartOutline fontSize="1.75rem" />
          </Link>
        </div>
        <div className="flex items-center">
          <img className="w-[600px] " src={ImageDashboard} alt="" />
          <img
            className="w-[400px] h-fit pl-32"
            src={ImageDashboardText}
            alt=""
          />
        </div>

        <div className="justify-end flex px-8 ">
          <Link className="m-2 font-bold hover:bg-white hover:rounded-lg hover:shadow-md p-2">
            Refill
          </Link>
          <Link className="m-2 font-bold hover:bg-white hover:rounded-lg hover:shadow-md p-2">
            Location
          </Link>
          <Link className="m-2 font-bold hover:bg-white hover:rounded-lg hover:shadow-md p-2">
            Package
          </Link>
        </div>
        <div>
          <div className="w-screen h-full ms-auto">
            <div className={`min-h-dvh w-1/1 bg-white flex`}>
              <div className={`min-h-dvh w-1/3 bg-[#EDC35C]`}>
                <div className=" items-center">
                  <div className="text-center">
                    <div className="flex justify-center">
                      <img className="w-[250px] pl-5 " src={ImageLogo} alt="" />
                    </div>
                    <strong>About Us</strong>
                    <div className="text-sm text-black m-5">
                      Lifeline merupakan media untuk membantu teman Lifeline
                      mengabadikan moment yang nantinya akan menjadi bagian dari
                      perjalanan hidup teman Lifeline. Kami hadir dengan
                      menyediakan jasa sewa kamera Instax Mini Liplay, Mini 12,
                      dan juga Refill kamera.
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full py-8">
                <div className="flex  justify-end w-full pr-8 font-bold">
                  <div className="text-end">
                    <h1 className="text-3xl">Our</h1>
                    <h1 className="text-3xl">Journey</h1>
                  </div>
                </div>
                <div className="flex">
                  <img className="pl-5 pt-10 w-[200px]" src={ImageLogoSewa} alt="" />
                  <div className="content-center">
                    <strong className=" text-2xl">@sewainstax.malang</strong>
                    <p className="mt-4 w-2/3">
                      Akhir 2019 kami memulai dengan nama @sewainstax.malang.
                      Dengan nama brand ini kami telah mampu mengabadikan moment
                      lebih dari 200 pelanggan.
                    </p>
                  </div>
                </div>
                <div className="flex justify-end pr-5 pl-5 lg:pl-0 text-end">
                  <div className="content-center w-2/3">
                    <strong className="text-2xl">@lifelinemlg</strong>
                    <p className="mt-4">
                      September 2022, Kami memulai kembali dengan brand yang
                      baru yaitu Lifeline. Lebih dari sekedar menyewakan kamera,
                      Kami ingin lebih dekat dengan teman Lifeline dengan
                      pendekatan baru.
                    </p>
                  </div>
                  <img
                    className="pl-5 pt-10 w-[200px]"
                    src={ImageLogo}
                    alt=""
                  />
                </div>

                <hr className="bg-black h-[2px] w-24 ml-16" />

                <div className="ml-16">
                  <div className="flex justify-between w-24 p-1">
                    <AiOutlineMail fontsize="2rem" />
                    <TbPhoneCalling fontsize="1.75rem" />
                    <BsInstagram fontsize="2 rem" />
                    <IoLogoTiktok dontsize="2 rem" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-screen h-full ">
            <div className="w-full bg-white text-center">
                <div className="w-3/4 ">
                  <img
                    className="pl-20 pt-10 w-[250px] "
                    src={ImageLogo}
                    alt=""
                    />
                  <p className="justify-between w-1/3">Save Your Memory</p> 
                    </div>
              <div className=" bg-white w-2/3 ">
                <p className="font-bold flex-row">Information</p>
                <p className="pr-7">About Us</p> <br />
                <p className="">More search</p> <br />
                <p>Testimonials</p> <br />
                <p className="pr-11">Events</p> <br />
                </div >
                <div className="w-1/4">
                  <strong>Location</strong>
                  <p>
                    JL.Kapisraba 2 10J No.1 Kecamatan Pakis, Kabupaten Malang,
                    Jawa Timur
                  </p>
            </div>
                </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Dashboard;

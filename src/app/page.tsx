import NavBar from "@/components/NavBar";
import Title from "./_components/Title";
import Slider from "@/components/Slider/Slider";
import Portfolio from "@/components/Ui/Portfolio";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Title />
      <Slider />
      <section className="flex justify-center max-md:flex-col max-md:text-center ">
        <div className="ml-10 mt-10 max-md:m-auto">
          <h1 className="text-[90px] font-light max-w-xl text-[#0D0C22] md:text-[60px] md:max-w-lg max-md:text-7xl max-sm:text-5xl">
            When only the best talent will do.
          </h1>
        </div>
        <div className="ml-10 mr-[5rem] mt-[11%] max-w-xl max-md:m-auto max-md:mt-10">
          <p className="font-normal text-[20px] max-w-lg md:text-[20px] max-md:text-lg">
            See why over 60,000 leading brands and business use Fribbbblee to
            attract, engage, and hire their design talent.
          </p>
          <button className="mt-10 py-4 px-5 bg-[#0D0C22] delay-100 ease-in duration-100 hover:bg-[#565564]  text-white rounded-full  max-w-xl mx-auto">
            Get started
          </button>
        </div>
      </section>
      <Portfolio />
      <Footer />
    </main>
  );
}

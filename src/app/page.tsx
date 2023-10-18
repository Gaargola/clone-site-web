import NavBar from "@/components/NavBar";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <main>
      <NavBar />
      <section className="flex flex-col mt-[4rem]">
        <p className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-800 px-4 py-2 rounded-full text-white text-center mx-auto">
          Over 3 million people have already joined the platform!
        </p>
        <h1 className="text-7xl font-serif font-medium text-center mt-10 max-w-2xl mx-auto text-[#0D0C22]">
          Hire the worlds top creative talent.
        </h1>
        <p className="text-center mt-10 font-medium text-xl">
          Connect with a community of millions of top-rated designers & agencies
          around the world.
        </p>
        <button className="mt-10 py-4 px-5 bg-[#0D0C22] delay-100 ease-in duration-100 hover:bg-[#565564]  text-white rounded-full  max-w-xl mx-auto">
          Start hiring today
        </button>
      </section>
      <Slider />
      <section className="flex justify-center">
        <div className="ml-10 mt-10">
          <h1 className="text-[90px] font-light max-w-xl text-[#0D0C22]">When only the best talent will do</h1>
        </div>
        <div className="ml-10 mr-[5rem] mt-[11%] max-w-xl">
          <p className="font-normal text-[20px] max-w-lg">
            See why over 60,000 leading brands and business use Fribbbblee to attract, engage, and hire their design talent.
          </p>
          <button className="mt-10 py-4 px-5 bg-[#0D0C22] delay-100 ease-in duration-100 hover:bg-[#565564]  text-white rounded-full  max-w-xl mx-auto">Get started</button>
        </div>
      </section>
    </main>
  );
}

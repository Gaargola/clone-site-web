function Portfolio() {
  return (
    <section className="flex justify-center bg-[#FFDA79] p-[150px] mt-[120px]">
      <div className="flex flex-col items-center m-auto">
        <h1 className="text-[64px] tracking-wider font-serif font-medium text-center max-w-xl text-[#0d0c22]">
          Find your next designer today
        </h1>
        <div className="flex flex-col mt-10">
          <p className="text-xl text-center max-w-xl text-[#0d0c22]">
            The world’s leading brands, to hire creative talent.
          </p>
          <p className="mt-2 text-center text-xl max-w-xl text-[#0d0c22]">
            Browse millions of top-rated portfolios to find your perfect
            creative match.
          </p>
          <div className="flex justify-center">
            <button className="m-10 mr-2 py-4 px-5 bg-[#0D0C22] font-semibold delay-100 ease-in duration-100 hover:bg-[#565564]  text-white rounded-full  max-w-xl mx-auto">
              Get started now
            </button>
            <button className="m-10 ml-2 py-4 px-5 bg-[#fff] rounded-full font-semibold max-w-xl mx-auto text-[#0D0C22] hover:text-[#646464] delay-100 ease-in duration-75">
              Learn about hiring
            </button>
          </div>
          <div className="flex justify-center">
            <p className="mt-2 text-center text-xl max-w-xl text-[#0d0c22]">
              Are you a designer?
            </p>
            <a
              href="#"
              className="mt-2 ml-2 text-center text-xl max-w-xl "
            >
              <span className="border-b-2 border-gray-900 text-[#0d0c22]">Join Fribbbblee</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;

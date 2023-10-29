function Portfolio() {
  return (
    <section className="flex justify-center bg-[#FFDA79] p-[150px] mt-10">
      <div className="flex flex-col items-center">
        <h1 className="text-7xl font-serif font-medium text-center">Start hiring today</h1>
        <div>
          <p>Browse porfolios and engage with top creative talent today.</p>
          <div className="flex justify-center">
            <button className="m-10 mr-2 py-4 px-5 bg-[#0D0C22] delay-100 ease-in duration-100 hover:bg-[#565564]  text-white rounded-full  max-w-xl mx-auto">Get started</button>
            <button className="m-10 ml-2 py-4 px-5 bg-[#fff] rounded-full  max-w-xl mx-auto text-[#0D0C22] hover:text-[#646464] delay-100 ease-in duration-75">Learn about hiring</button>
          </div>
          <p>Are you a designer?</p>
          <a href="#">Join Fribbbblee</a>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;

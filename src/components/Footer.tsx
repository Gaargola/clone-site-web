function Footer() {
  return (
    <footer className="flex justify-between m-10 max-md:flex-col max-md:justify-center max-md:items-center max-md:text-center">
      <ul className="flex ml-10 max-md:ml-0">
        <li className="mr-4">
          <a href="#" className="text-[#8B8A95] text-sm">
            ©2023 by Mauro
          </a>
        </li>
        <li className="mr-4">
          <a href="#" className="text-[#8B8A95] text-sm">
            Terms
          </a>
        </li>
        <li className="mr-4">
          <a href="#" className="text-[#8B8A95] text-sm">
            Privacy
          </a>
        </li>
        <li className="">
          <a href="#" className="text-[#8B8A95] text-sm">
            Cookies
          </a>
        </li>
      </ul>
      <ul className="flex mr-10 max-md:mt-4 max-md:mr-0 max-sm:hidden">
        <li className="">
          <a href="#" className="text-[#8B8A95] text-sm">
            Jobs
          </a>
        </li>
        <li className="ml-4">
          <a href="#" className="text-[#8B8A95] text-sm">
            Designers
          </a>
        </li>
        <li className="ml-4">
          <a href="#" className="text-[#8B8A95] text-sm">
            Freelancers
          </a>
        </li>
        <li className="ml-4">
          <a href="#" className="text-[#8B8A95] text-sm">
            Tags
          </a>
        </li>
        <li className="ml-4">
          <a href="#" className="text-[#8B8A95] text-sm">
            Places
          </a>
        </li>
        <li className="ml-4">
          <a href="#" className="text-[#8B8A95] text-sm">
            Resources
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;

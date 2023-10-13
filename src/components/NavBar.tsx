import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex justify-around">
      <ul className="flex mt-10 mr-[5%] ">
        <li className="">
          <Link href="#" className="font-sans font-medium hover:text-[#565564]">Find talent</Link>
        </li>
        <li className="ml-8">
          <Link href="#" className="font-sans font-medium hover:text-[#565564]">Inspiration</Link>
        </li>
        <li className="ml-8">
          <Link href="#" className="font-sans font-medium hover:text-[#565564]">Learn design</Link>
        </li>
        <li className="ml-8">
          <Link href="#" className="font-sans font-medium hover:text-[#565564]">Jobs</Link>
        </li>
        <li className="ml-8">
          <Link href="#" className="font-sans font-medium hover:text-[#565564]">Go Pro</Link>
        </li>
      </ul>
        <Image src="/logo.png" alt="logo" className="max-w-auto cursor-pointer ease-in duration-100 hover:invert-[40%] " layout="fixed" height={300} width={100}/>
      <ul className="flex mt-10 ml-[25%]">
        <li className="mr-4">
          <Link href="#" className="font-sans font-medium hover:text-[#565564]">Log in</Link>
        </li>
        <span className="mr-4">•</span>
        <li >
          <Link href="#" className="px-6 py-3 text-center items-center rounded-full font-sans bg-[#0D0C22] delay-100 ease-in duration-100 hover:bg-[#565564] text-white font-semibold">Sign up</Link>
        </li>
      </ul>
    </nav>
  );
}


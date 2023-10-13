import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex justify-around">
      <ul className="flex mt-10 ">
        <li className="">
          <Link href="#" className="">Find talent</Link>
        </li>
        <li className="ml-4">
          <Link href="#">Inspiration</Link>
        </li>
        <li className="ml-4">
          <Link href="#">Learn design</Link>
        </li>
        <li className="ml-4">
          <Link href="#">Jobs</Link>
        </li>
        <li className="ml-4">
          <Link href="#">Go Pro</Link>
        </li>
      </ul>
        <Image src="/logo.png" alt="logo" className="ml-[10rem] mr-[10rem]" layout="fixed" height={300} width={100}/>
      <ul className="flex mt-10">
        <li className="mr-4">
          <Link href="#">Log in</Link>
        </li>
        <span className="mr-4">•</span>
        <li >
          <Link href="#" className="px-7 py-4 rounded-full bg-[#0D0C22] text-white font-semibold">Sign up</Link>
        </li>
      </ul>
    </nav>
  );
}


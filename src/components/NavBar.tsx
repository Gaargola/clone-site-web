import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <ul>
        <Image src="/logo.png" alt="logo" height={30} width={30}/>
        <li>
          <Link href="#">Find talent</Link>
        </li>
        <li>
          <Link href="#">Inspiration</Link>
        </li>
        <li>
          <Link href="#">Learn design</Link>
        </li>
        <li>
          <Link href="#">Jobs</Link>
        </li>
        <li>
          <Link href="#">Go Pro</Link>
        </li>
      </ul>
    </nav>
  );
}

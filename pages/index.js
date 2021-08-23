import Image from "next/image";
import logo from "../public/logo.jpeg";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <header>
        This is my first next.js app
        <Image src={logo} width={150} height={120} />
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/users">
          <a>Users</a>
        </Link>
      </header>
    </div>
  );
}

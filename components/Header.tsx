import Image from "next/image";
import Link from "next/link";
import kamilImg from "../public/kamil_with_coffee.jpeg";
function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="rounded-full "
            width={50}
            height={50}
            alt="Kamil Image"
            src={kamilImg}
          />
        </Link>
        <h1>Kamil's Blog</h1>
      </div>
      <div className=" border border-black p-3 rounded-md">
        <Link href="https://kamilhassan.com">
          Visit Kamil's Personal Website
        </Link>
      </div>
    </header>
  );
}

export default Header;

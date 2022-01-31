import Link from "next/link";

function Header() {
  return (
    <nav>
      <Link href="../">
        <a>Home</a>
      </Link>
      <Link href="/">
        <a>Blog</a>
      </Link>
    </nav>
  );
}

export default Header;

import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="container">
          <div>

          </div>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/shop">Shop</Link>
          </nav>
      </div>
    </header>
  );
}

export default Header;

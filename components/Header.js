import Link from "next/link";
import Image from "next/image";
import styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
          <div className={styles.container}>
            <Link href="/">
                <Image width={400} height={100} src="/img/logo.svg" alt="Image logo"/>
            </Link>
            <nav className={styles.nav}>
                <Link href="/">Home</Link>
                <Link href="/about">About Us</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/shop">Shop</Link>
            </nav>
          </div>
      </div>
    </header>
  );
}

export default Header;

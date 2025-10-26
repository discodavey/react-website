import Image from "next/image";
import "./Header.scss";
import Nav from "../Nav/Nav.jsx";

export default function Home() {
  return (
    <header className="header">
      <div className="logo">
        <Image
          src="/images/cropped-impulse-events-wp-logo.png"
          alt="Impulse Events"
          width={168}
          height={24}
          priority
        />
      </div>
      <nav className="navigation">
        <Nav />
      </nav>
      <div className="mobile-menu">
        <a href="">
          <img src="../../images/hamburger.svg" alt="" />Menu</a>
        </div>
    </header>
  );
}
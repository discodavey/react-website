import Image from "next/image";
import "./header.scss";
import Nav from "./nav";

export default function Home() {
  return (
    <header className="header">
      <div className="logo">
        <Image
          src="/cropped-impulse-events-wp-logo.png"
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
          <img src="/hamburger.svg" alt="" />Menu</a>
        </div>
    </header>
  );
}
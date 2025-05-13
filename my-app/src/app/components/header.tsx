import Image from "next/image";
import "./header.css";
import Nav from "./nav";

export default function Home() {
  return (
    <header className="header">
      <div className="logo">
        <Image
          src="/cropped-impulse-events-wp-logo.png"
          alt="Impulse Events"
          width={180}
          height={38}
          priority
        />
      </div>
      <nav className="navigation">
        <Nav />
      </nav>
    </header>
  );
}
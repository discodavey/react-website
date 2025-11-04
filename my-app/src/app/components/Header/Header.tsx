import Image from "next/image";
import "./Header.scss";
import Nav from "../Nav/Nav";

export default function Header({ navLinks } : { navLinks: { link: string, title: string}[]}) {
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
        <Nav links={ navLinks } />
      </nav>
    </header>
  );
}

import Image from "next/image";
import "./Footer.scss"

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="footer-navigation">
        <li>
          <a href="" className="footer-navigation-link">Home</a>
        </li>
        <li>
          <a href="" className="footer-navigation-link">Privacy Policy</a>
        </li>
        <li>
          <a href="" className="footer-navigation-link">Terms</a>
        </li>
      </ul>
    </footer>
  );
}
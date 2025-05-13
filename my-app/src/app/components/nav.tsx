import "./nav.css"

export default function Nav() {
  return (
    <ul className="navigation">
      <li><a href="/" className="navigation-link">Home</a></li>
      <li><a href="about" className="navigation-link">About</a></li>
    </ul>
  );
}
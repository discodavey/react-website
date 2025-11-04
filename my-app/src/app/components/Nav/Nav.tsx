import "./Nav.scss"

export default function Nav({ links } : { links: { link: string, title: string}[]}) {
  return (
    <ul className="navigation">
       {links.map(({ link, title }, index) => (
          <li key={index}><a href={link} className="navigation-link">{title}</a></li>
        ))}
    </ul>
  );
}

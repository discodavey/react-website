import React from 'react';
import "./page.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import homeData from '../data/home.json';
import sideData from '../data/side.json';
import navLinks from '../data/links.json';

const Home: React.FC = () => {
  const {title: homeTitle, description, content: homeContent, bannerImage: bannerImage} = homeData;
  const {content: sideContent} = sideData;

  return (
    <div className="wrapper">
      <div className="container">
        <Header navLinks={navLinks.links} />
        <main className="main">
          <h1>{homeTitle}</h1>
          <img src={bannerImage} alt="" />
          <p>{description}</p>
          {homeContent.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </main>
        <aside className="aside">
          {sideContent.map((item, index) => (
            <div key={index} className="aside-content-item">
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </div>
          ))}
        </aside>
        <Footer />
      </div>
    </div>

  );
}

export default Home;

import React from 'react';
import "./page.scss";
import Header from "./components/header";
import Footer from "./components/footer";
import homeData from '../json/home.json';
import sideData from '../json/side.json';

const Home: React.FC = () => {
  const {title: homeTitle, description, content: homeContent} = homeData;
  const {title: sideTitle, content: sideContent} = sideData;

  return (
    <div className="wrapper">
      <div className="container">
        <Header/>
        <main className="main">
          <h1>{homeTitle}</h1>
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

const About: React.FC = () => {
  const {title: sideTitle, content: sideContent} = sideData;

  return (
    <div className="wrapper">
      <div className="container">
        <Header/>
        <main className="main">
         <h1>About Us</h1>
         <p>This is the about page</p>
        </main>
        <aside className="aside">
          <h2>{sideTitle}</h2>
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

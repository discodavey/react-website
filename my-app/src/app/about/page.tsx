import React from 'react';
import "../page.scss";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import aboutData from '../../data/about.json';
import sideData from '../../data/side.json';

const About: React.FC = () => {
  const {title, summary, content: aboutContent} = aboutData;
  const {content: sideContent} = sideData;

  return (
    <div className="wrapper">
      <div className="container">
        <Header/>
        <main className="main">
         <h1>{title}</h1>
         <h2>{summary}</h2>
         {aboutContent.map((item, index) => (
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

export default About;
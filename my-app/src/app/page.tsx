import React from 'react';
import "./page.scss";
import Header from "./components/header";
import Footer from "./components/footer";
import sampleData from '../json/home.json';

const Home: React.FC = () => {
  const {title, description, content} = sampleData;

  return (
    <div className="wrapper">
      <div className="container">
        <Header/>
        <main className="main">
          <h1>{title}</h1>
          <p>{description}</p>
          {content.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </main>
        <aside className="aside">
          This is the side
        </aside>
        <Footer />
      </div>
    </div>

  );
}

export default Home;

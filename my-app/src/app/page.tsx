import "./page.css";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="wrapper">
      <div className="container">
        <Header/>
        <main className="main">
          <h1>Welcome</h1>

          <p>This is a React website with Nextjs in progress. The code for this can be found on <a href="https://github.com/discodavey/react-website">GitHub</a></p>

          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore fugiat quis tempore dolore assumenda. Eius, asperiores optio. Beatae tempora nobis inventore, voluptates eligendi, dolore facere iusto quaerat vero, laudantium id. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste delectus ratione vitae. Sed aut iusto nihil illum ut distinctio vel magnam, exercitationem, fugit possimus corporis, minima in voluptas aspernatur pariatur?</p>

          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore fugiat quis tempore dolore assumenda. Eius, asperiores optio. Beatae tempora nobis inventore, voluptates eligendi, dolore facere iusto quaerat vero, laudantium id. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste delectus ratione vitae. Sed aut iusto nihil illum ut distinctio vel magnam, exercitationem, fugit possimus corporis, minima in voluptas aspernatur pariatur?</p>

          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore fugiat quis tempore dolore assumenda. Eius, asperiores optio. Beatae tempora nobis inventore, voluptates eligendi, dolore facere iusto quaerat vero, laudantium id. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste delectus ratione vitae. Sed aut iusto nihil illum ut distinctio vel magnam, exercitationem, fugit possimus corporis, minima in voluptas aspernatur pariatur?</p>

        </main>
        <aside className="aside">
          This is the side
        </aside>
        <Footer />
      </div>
    </div>

  );
}

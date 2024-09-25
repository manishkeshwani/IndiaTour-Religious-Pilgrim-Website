import Header from "./Header";
import Hero from "./Hero";
import Search from "./Search";
import Popular from "./Popular";
import Cities from "./Cities";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {

  return (
    <>
      <Header />

      <main>
        <article>
          <Hero />
          <Search />
          <Popular />
          <Cities />
          <Gallery />
          <Contact />
        </article>
      </main>

      <Footer />

      <a href="#top" className="go-top" data-go-top>
        <ion-icon name="chevron-up-outline"></ion-icon>
      </a>
    </>
  );
}

export default App;

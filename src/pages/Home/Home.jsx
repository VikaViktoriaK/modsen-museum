import { Container } from "../../components/Container/Container.jsx";
import Search from "../../components/UI/Search/Search.jsx";
import Gallery from "../../components/Gallery/Gallery.jsx";
import Recommendations from "../../components/Recommendations/Recommendations.jsx";
import "./Home.scss";

function App() {
  return (
    <Container>
      <div className="header-block">
        <h1>
          let&apos;s find some <span className="orange-span">art</span> <br />{" "}
          here!
        </h1>
        <Search />
      </div>
      <Gallery />
      <Recommendations />
    </Container>
  );
}

export default App;

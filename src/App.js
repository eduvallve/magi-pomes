import Container from "./components/container";
import InfoBox from "./components/infobox";
import Gallery from "./components/gallery";
import Copyright from "./components/copyright";

const App = () => {
  return (
    <main>
      <Container>
        <InfoBox />
      </Container>
      <Container>
        <Gallery/>
      </Container>
      <Container>
        <Copyright/>
      </Container>
    </main>
  );
};

export default App;

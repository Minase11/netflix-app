import "./App.css";
import Banner from "./Banner";
import Nav from "./Nav";
import Row from "./Row";
import requests from "./requests";

function App() {
  return (
    <div className="app">
      {/* Nav */}
      <Nav />
      {/* Banner */}
      <Banner />
      {/* Rows */}
      <Row
        title={"NETFLIX ORIGINALS"}
        fetchUrl={requests.fetchNetflixOriginals}
        isLarge
      />
      <Row title={"Trending"} fetchUrl={requests.fetchTrending} />
      <Row title={"Top Rated"} fetchUrl={requests.fetchTopRated} />
      <Row title={"Action Movies"} fetchUrl={requests.fetchActionMovies} />
      <Row title={"Comedy Movies"} fetchUrl={requests.fetchComedyMovies} />
      <Row title={"Horror Movies"} fetchUrl={requests.fetchHorrorMovies} />
      <Row title={"Romance Movies"} fetchUrl={requests.fetchRomanceMovies} />
      <Row title={"Documentaries"} fetchUrl={requests.fetchNetflixOriginals} />
    </div>
  );
}

export default App;

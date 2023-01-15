import React , {useContext} from "react";
import requests from "../api/request";
import Banner from "../components/Banner";
import Nav from "../components/Nav";
import Row from "../components/Row";
import { AuthContext } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";

function HomeScreen() {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  if(!currentUser){
    navigate("/");
  }

  return (
    <div>
      {/* Nav */}
      <Nav />

      {/* Banner */}
      <Banner />

      {/* row */}
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />

      <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />

      <Row title="TRENDING MOVIES" fetchUrl={requests.fetchTrending} />
      <Row title="TRENDING MOVIES" fetchUrl={requests.fetchTrendingIND} />
      <Row title="ANIMATED MOVIES" fetchUrl={requests.fetchAnimationMovies} />

      <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />

      {/* <Row title="TOP RATED MOVIES" fetchUrl={requests.fetchTopRated} /> */}
      <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />

      <Row title="ROMANTIC MOVIES" fetchUrl={requests.fetchRomanceMovies} />

      <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default HomeScreen;

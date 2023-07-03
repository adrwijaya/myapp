import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Nav from "../components/Navbar";
import Hero from "../components/HeroSection";
import Ticket from "../components/Ticketing";

const styles = {
  Body: {
    backgroundImage: "linear-gradient(to right, #EC7AB7, #EC7A7A)",
    height: "150vh",
  },
};

function Home() {
  return (
    <div style={styles.Body}>
      <Nav />
      <Hero />
      <Ticket />
    </div>
  );
}

export default Home;

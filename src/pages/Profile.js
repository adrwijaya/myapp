import React from "react";
import Hero from "../components/HeroSection";
import Ticket from "../components/Ticketing";
import NavUser from "../components/NavUser";
import "bootstrap/dist/css/bootstrap.min.css";

const styles = {
  body: {
    backgroundImage: "linear-gradient(to right, #EC7AB7, #EC7A7A)",
    height: "150vh",
  },
};

function Profile() {
  return (
    <div style={styles.body}>
      <NavUser />
      <Hero />
      <Ticket />
    </div>
  );
}

export default Profile;

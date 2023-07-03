import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Train from "../assets/img/train.png";
import Landtick from "../assets/img/landtick.png";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";

const styles = {
  bdaftar: {
    color: "#EC7AB7",
    backgroundColor: "#FFFFFF",
    borderRadius: "5px",
    padding: "5px 5px",
    margin: "0px 5px 0px 0px",
    borderColor: "#EC7AB7",
    width: "150px",
  },
  blogin: {
    color: "#FFFFFF",
    backgroundImage: "linear-gradient(to right, #EC7AB7, #EC7A7A)",
    borderRadius: "5px",
    padding: "5px 5px",
    margin: "0px 0px 0px 5px",
    borderColor: "#0000",
    width: "150px",
  },
  blogin2: {
    color: "#FFFFFF",
    backgroundImage: "linear-gradient(to bottom, #EC7AB7, #EC7A7A)",
    borderRadius: "30px",
    borderColor: "#0000",
  },
  nav: {
    padding: "0px 70px 0px 70px",
  },
  flogin: {
    background: "linear-gradient(to bottom, #ec7ab7, #ec7a7a)",
    webkitBackgroundClip: "text",
    webkitTextFillColor: "transparent",
  },
  modal: {
    width: "20rem",
    position: "absolute",
    left: "40%",
    top: "50%",
  },
};

function Nav() {
  const [showLogin, setShowLogin] = useState(false);
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  const [showRegister, setShowRegister] = useState(false);
  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);

  const navigate = useNavigate();

  const berhasilLogin = () => {
    navigate("/profile");
  };

  return (
    <div>
      <Navbar
        fixed="top"
        className="d-flex justify-content-between px-5 bg-white"
      >
        <div style={styles.nav}>
          <img src={Landtick} alt="landtick"></img>
          <> </>
          <img src={Train} alt="train"></img>
        </div>
        <div style={styles.nav}>
          <button onClick={handleShowRegister} style={styles.bdaftar}>
            DAFTAR
          </button>
          <button onClick={handleShowLogin} style={styles.blogin}>
            LOGIN
          </button>
        </div>
      </Navbar>
      <Modal style={styles.modal} show={showLogin} onHide={handleCloseLogin}>
        <Modal.Body>
          <form>
            <h1 style={styles.flogin} className="p-3 text-center">
              Login
            </h1>
            <div className="px-3 pb-3">
              <input className="form-control" placeholder="Username" />
            </div>
            <div className="px-3 pb-3">
              <input className="form-control" placeholder="Password" />
            </div>
            <div className="px-3 pb-3">
              <Button
                onClick={berhasilLogin}
                style={styles.blogin2}
                type="submit"
                className="w-100"
              >
                Login
              </Button>
            </div>
          </form>
          <p className="text-center">
            Belum Punya Akun ? Klik <span>Disini</span>
          </p>
        </Modal.Body>
      </Modal>
      <Modal
        style={styles.modal}
        show={showRegister}
        onHide={handleCloseRegister}
      >
        <Modal.Body>
          <form>
            <h1 style={styles.flogin} className="p-3 text-center">
              Daftar
            </h1>
            <div className="px-3 pb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Nama Lengkap"
              />
            </div>
            <div className="px-3">
              <input className="form-control" placeholder="Username" />
            </div>
            <div className="p-3">
              <input type="text" className="form-control" placeholder="Email" />
            </div>
            <div className="px-3 pb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <div className="px-3 pb-3">
              <Button style={styles.blogin2} type="submit" className="w-100">
                Register
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Nav;

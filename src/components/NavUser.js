import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Train from "../assets/img/train.png";
import Landtick from "../assets/img/landtick.png";
import Poto from "../assets/img/boy.png";
// import DropdownButton from "react-bootstrap/DropdownButton";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import tiket from "../assets/img/ticket.png";
import bill from "../assets/img/bill.png";
import logout from "../assets/img/logout.png";
// import Dropdown from "react-bootstrap/Dropdown";

// import Modal from "react-bootstrap/Modal";
// import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";

const styles = {
  navbar: {
    boxShadow: "0px 2px 2px 0px gray",
    borderColor: "#000000",
  },
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
  nav2: {
    padding: "0px 70px 0px 70px",
    display: "flex",
    alignItems: "center",
  },
  image: {
    width: "30px",
    height: "30px",
    borderRadius: "30px",
    cursor: "pointer",
    // border: "5px solid #EC7AB7",
  },
  divimg: {
    borderRadius: "30px",
    border: "3px solid #EC7AB7",
    marginLeft: "20px",
    padding: "10px 5px 0px 5px",
    backgroundColor: "#FFFFFF",
    position: "relative",
    // display: "inline-block",
  },
  dropdown: {
    position: "absolute",
    top: "70px",
    right: "100px",
    backgroundColor: "white",
    border: "5px",
    borderColor: "#000000",
    boxShadow: "1px 2px 3px 1px grey",
    borderRadius: "10px",
    paddingBottom: "15px",
  },
  dropdown2: {
    padding: "15px 70px 0px 15px",
    display: "flex",
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
  text: {
    fontSize: "24px",
    background: "linear-gradient(to right, #ec7ab7, #ec7a7a)",
    webkitBackgroundClip: "text",
    webkitTextFillColor: "transparent",
  },
  text2: {
    fontSize: "20px",
    padding: "3px 0px 0px 15px",
  },
};

function NavUser() {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const home = () => {
    navigate("/");
  };

  //   const [showLogin, setShowLogin] = useState(false);
  //   const handleCloseLogin = () => setShowLogin(false);
  //   const handleShowLogin = () => setShowLogin(true);

  //   const [showRegister, setShowRegister] = useState(false);
  //   const handleCloseRegister = () => setShowRegister(false);
  //   const handleShowRegister = () => setShowRegister(true);

  //   const berhasilLogin = () => {
  //     navigate("/profile");
  //   };

  return (
    <div>
      <Navbar
        fixed="top"
        className="d-flex justify-content-between px-5 bg-white"
        style={styles.navbar}
      >
        <div style={styles.nav}>
          <img onClick={home} src={Landtick} alt="landtick"></img>
          <> </>
          <img src={Train} alt="train"></img>
        </div>
        <div style={styles.nav2}>
          <div style={styles.text}>Anto</div>
          <div style={styles.divimg}>
            <img
              onClick={setOpen}
              src={Poto}
              alt="Poto Profile"
              style={styles.image}
            />
          </div>
          {open && (
            <div style={styles.dropdown}>
              <DropdownItem
                onClick={() => setOpen(false)}
                style={styles.dropdown2}
              >
                <img src={tiket} alt="tiket" />
                <div style={styles.text2}>Tiket Saya</div>
              </DropdownItem>
              <DropdownItem
                onClick={() => setOpen(false)}
                style={styles.dropdown2}
              >
                <img src={bill} alt="bill" />
                <div style={styles.text2}>Payment</div>
              </DropdownItem>
              <hr />
              <DropdownItem
                onClick={() => setOpen(false)}
                className="px-3 d-flex"
              >
                <img src={logout} alt="logout" />
                <div style={styles.text2}>Logout</div>
              </DropdownItem>
            </div>
          )}
        </div>
      </Navbar>
      {/* <Modal style={styles.modal} show={showLogin} onHide={handleCloseLogin}>
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
      </Modal> */}
    </div>
  );
}

export default NavUser;

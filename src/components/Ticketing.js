import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Kereta from "../assets/img/kereta.png";
import Form from "react-bootstrap/Form";
import Rounded from "../assets/img/Rounded.png";
import DropdownButton from "react-bootstrap/DropdownButton";
import InputGroup from "react-bootstrap/InputGroup";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import DataTicket from "../data/DataTicket";
import Info from "../data/Info";

const styles = {
  body: {
    backgroundColor: "#FFFFFF",
  },
  body2: {
    backgroundColor: "#FFFFFF",
    borderRadius: "0px 10px 10px 0px",
  },
  rectangle: {
    height: "53px",
    width: "9px",
    backgroundColor: "#E67E22",
  },
  krt1: {
    display: "flex",
    justifyContent: "center",
    borderRadius: "10px",
    borderColor: "#000000",
    border: "5px",
    marginLeft: "120px",
    backgroundColor: "#F2F2F2",
    position: "absolute",
    top: "320px",
    width: "1060px",
    height: "190px",
    boxShadow: "0px 5px 5px 0px grey",
  },
  krt2: {
    paddingTop: "15px",
  },
  img: {
    width: "30px",
    height: "30px",
    margin: "0px 10px 0px 10px",
  },
  text: {
    fontSize: "18px",
    fontFamily: "Avenir",
    paddingRight: "80px",
  },
  krt3: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  cb: {
    fontWeight: "bold",
  },
  text2: {
    fontWeight: "bold",
    paddingBottom: "5px",
  },
  krt4: {
    display: "flex",
    justifyContent: "center",
    width: "800px",
  },
  rounded: {
    width: "37px",
    height: "37px",
    margin: "23px 10px 0px 10px",
  },
  krt5: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: "10px",
  },
  dropdown: {
    width: "30%",
  },
  dropdown2: {
    backgroundColor: "#0000",
  },
  text4: {
    textAlign: "center",
  },
  krt6: {
    width: "100%",
  },
  krt7: {
    width: "44%",
  },
  text3: {
    paddingTop: "5px",
    paddingLeft: "20px",
    fontSize: "20px",
  },
  button: {
    width: "33%",
    backgroundImage: "linear-gradient(to right, #EC7AB7, #EC7A7A)",
    borderColor: "#0000",
    marginTop: "27px",
    borderRadius: "5px",
    color: "white",
  },
  info: {
    paddingTop: "200px",
    paddingBottom: "50px",
  },
  text5: {
    paddingRight: "55px",
    paddingLeft: "50px",
  },
  text7: {
    paddingRight: "55px",
  },
  text6: {
    paddingLeft: "140px",
    paddingRight: "100px",
  },
  binfo: {
    display: "flex",
    justifyContent: "center",
  },
};

function Ticket() {
  return (
    <div style={styles.body}>
      <div style={styles.krt1}>
        <div style={styles.krt2}>
          <div style={styles.krt3}>
            <div style={styles.rectangle}></div>
            <img src={Kereta} alt="kereta" style={styles.img}></img>
            <div style={styles.text}>Tiket Kereta Api</div>
          </div>
        </div>
        <div style={styles.body2}>
          <div style={styles.text3}>Tiket Kereta Api</div>
          <div style={styles.krt4}>
            <div style={styles.krt7}>
              <div>
                <div style={styles.text2}>Asal</div>
                <Form.Control type="text" placeholder="Jakarta" />
              </div>
              <div style={styles.krt5}>
                <div>
                  <div style={styles.text2}>Tanggal Berangkat</div>
                  <Form.Control type="date" placeholder="DD-MM-YY" />
                </div>
                <Form.Check
                  type="checkbox"
                  label="Pulang Pergi"
                  style={styles.cb}
                />
              </div>
            </div>
            <img src={Rounded} alt="Rounded" style={styles.rounded}></img>
            <div style={styles.krt7}>
              <div style={styles.krt6}>
                <div style={styles.text2}>Tujuan</div>
                <Form.Control type="text" placeholder="Surabaya" />
              </div>
              <div style={styles.krt5}>
                <div style={styles.dropdown}>
                  <div style={styles.text2}>Dewasa</div>
                  <InputGroup style={styles.dropdown2}>
                    <Form.Control
                      style={styles.text4}
                      type="input"
                      placeholder="2"
                    />
                    <DropdownButton>
                      <DropdownItem>2</DropdownItem>
                      <DropdownItem>3</DropdownItem>
                      <DropdownItem>4</DropdownItem>
                    </DropdownButton>
                  </InputGroup>
                </div>
                <div style={styles.dropdown}>
                  <div style={styles.text2}>Bayi</div>
                  <InputGroup style={styles.dropdown2}>
                    <Form.Control
                      style={styles.text4}
                      type="input"
                      placeholder="2"
                    />
                    <DropdownButton>
                      <DropdownItem>2</DropdownItem>
                      <DropdownItem>3</DropdownItem>
                      <DropdownItem>4</DropdownItem>
                    </DropdownButton>
                  </InputGroup>
                </div>
                <button style={styles.button}>Cari Tiket</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={styles.info}>
        <div>
          <div style={styles.binfo}>
            <div style={styles.text5}>Nama Kereta</div>
            <div className="mx-4 px-4">Berangkat</div>
            <div style={styles.text7} className="mx-5">
              Tiba
            </div>
            <div className="mx-4">Durasi</div>
            <div style={styles.text6}>Harga Per Orang</div>
          </div>
          {DataTicket.map((e) => {
            return (
              <Info
                namaKereta={e.namaKereta}
                kelas={e.kelas}
                berangkat={e.berangkat}
                dari={e.dari}
                img={e.img}
                tiba={e.tiba}
                ke={e.ke}
                durasi={e.durasi}
                harga={e.harga}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Ticket;

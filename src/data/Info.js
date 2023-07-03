import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const styles = {
  body: {
    display: "flex",
    justifyContent: "center",
    border: "2px groove",
    borderRadius: "5px",
    margin: "20px 120px 20px 120px",
    padding: "20px 0px 20px 0px",
  },
  text: {
    paddingRight: "50px",
    paddingLeft: "50px",
    fontWeight: "bold",
  },
  text2: {
    paddingRight: "100px",
    paddingLeft: "125px",
  },
  text3: {
    fontWeight: "100",
  },
  img: {
    width: "20px",
    height: "20px",
    marginTop: "20px",
  },
};

function Info(props) {
  const navigate = useNavigate();
  const MyTicket = () => {
    navigate("/myticket");
  };
  return (
    <div onClick={MyTicket} style={styles.body}>
      <div style={styles.text}>
        <div>{props.namaKereta}</div>
        <div style={styles.text3}>{props.kelas}</div>
      </div>
      <div style={styles.text}>
        <div>{props.berangkat}</div>
        <div style={styles.text3}>{props.dari}</div>
      </div>
      <img src={props.img} alt="$props.arrow" style={styles.img}></img>
      <div style={styles.text}>
        <div>{props.tiba}</div>
        <div style={styles.text3}>{props.ke}</div>
      </div>
      <div style={styles.text}>{props.durasi}</div>
      <div style={styles.text2} className="text-danger">
        {props.harga}
      </div>
    </div>
  );
}

export default Info;

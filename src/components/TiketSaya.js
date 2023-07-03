import React from "react";
import cssModule from "../css/TS.module.css";
import trainp from "../assets/img/trainp.png";
import landtickp from "../assets/img/landtickp.png";

function TiketSaya() {
  return (
    <div className={cssModule.header}>
      <div className={cssModule.textutama}>Tiket Saya</div>
      <div className={cssModule.hnav}>
        <div>
          <div className={cssModule.nav}>
            <img src={landtickp} alt="landtickp" />
            <img src={trainp} alt="trainp" className="px-2" />
          </div>
          <div className={cssModule.div}>
            <div className={cssModule.divargo}>
              <div className={cssModule.text}>Argo Wilis</div>
              <div className={cssModule.text2}>Eksekutif (H)</div>
              <div className={cssModule.text3}>Pending</div>
            </div>
            <div className={cssModule.divr}>
              <div className={cssModule.rounded}></div>
              <div className={cssModule.vertical}>
                <hr />
              </div>
              <div className={cssModule.rounded2}></div>
            </div>
            <div className={cssModule.divtgl}>
              <div className={cssModule.divtgl2}>
                <div className={cssModule.text4}>05.00</div>
                <div className={cssModule.text5}>21 Februari 2020</div>
              </div>
              <div className={cssModule.text4}>10.05</div>
              <div className={cssModule.text5}>21 Februari 2020</div>
            </div>
            <div className={cssModule.divtgl}>
              <div className={cssModule.divtgl2}>
                <div className={cssModule.text4}>Jakarta (GMR)</div>
                <div className={cssModule.text5}>Stasiun Gambir</div>
              </div>
              <div className={cssModule.text4}>Surabaya (SBY)</div>
              <div className={cssModule.text5}>Stasiun Surabaya</div>
            </div>
          </div>
          <div>
            <div className={cssModule.divid}>
              <div className={cssModule.text6}>No. Tanda Pengenal</div>
              <div className={cssModule.text6}>Nama Pemesan</div>
              <div className={cssModule.text7}>No. Handphone</div>
              <div className={cssModule.text6}>Email</div>
            </div>
            <hr />
            <div className={cssModule.divid2}>
              <div className="mx-4">31175033003970001</div>
              <div className="mx-3">Anto</div>
              <div className="mx-5 px-5">083896833112</div>
              <div>anto@gmail.com</div>
            </div>
          </div>
        </div>
        <div className={cssModule.divkrt}>
          <div className={cssModule.text8}>Kereta Api</div>
          <div>
            <span className={cssModule.text9}>Saturday</span>, 21 Februari 2020
          </div>
          <div className={cssModule.btndiv}>
            <button className={cssModule.btn}>Bayar Sekarang</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TiketSaya;

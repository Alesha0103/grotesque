import React, { useState } from "react";
import "./home.css";

import { Link } from "react-router-dom";

import mim from "../../assets/mim.jpg";

import Modal from "../../components/modal";

const Home = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <>
      <Modal active={modalActive} setActive={setModalActive}>
        <img src={mim} alt="mim" />
      </Modal>

      <div className="home">
        <div className="container">
          <h1 className="text-center">ГРОТЕСК</h1>
          <div className="mim">
            <img
              src={mim}
              alt="mim"
              onClick={() => setModalActive(true)}
              style={{ cursor: "pointer" }}
            />
          </div>
          <p className="text-center best">ЛУЧШЕЕ ИЗ МИРА РАЗВЛЕЧЕНИЯ</p>
          <div className="buttons-section">
            <Link to="/living-statues">
              <button className="btn home-btn">Живые статуи</button>
            </Link>
            <Link to="/stilt-walkers">
              <button className="btn home-btn">Ходулисты</button>
            </Link>
            <Link to="/papper-show">
              <button className="btn home-btn">Бумажное шоу</button>
            </Link>
            <Link to="/animators">
              <button className="btn home-btn">Аниматоры</button>
            </Link>
            <Link to="/mims">
              <button className="btn home-btn">Мимы</button>
            </Link>
            <Link to="/living-table">
              <button className="btn home-btn">Живой стол</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

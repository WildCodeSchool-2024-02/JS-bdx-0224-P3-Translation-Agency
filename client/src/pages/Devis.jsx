import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Devis.scss";
import france from "../assets/images/france.png";
import italy from "../assets/images/italy.png";
import usa from "../assets/images/usa.png";
import germany from "../assets/images/germany.png";
import headerImg from "../assets/images/im4.jpg";
import { createDevis } from "../services/devis";

const getFlag = (value) => {
  if (value === "Français") {
    return france;
  }
  if (value === "Anglais") {
    return usa;
  }
  if (value === "Italien") {
    return italy;
  }
  if (value === "Allemand") {
    return germany;
  }
  return france;
};

function Devis() {
  const [traduction, setTraduction] = useState({
    from: "Français",
    to: "Anglais",
    traducteur:
      "/src/assets/images/2.jpg" ||
      JSON.parse(window.localStorage.getItem("trad")).img,
    traducteurName:
      "Maître Leslie Alexander" ||
      JSON.parse(window.localStorage.getItem("trad")).name,
  });
  const [devisData, setDevisData] = useState({
    Email: "",
    Id_Translator: 1,
    FirstClientName: "",
    LastClientName: "",
    Language_Doc: "",
  });

  useEffect(() => {
    const getData = () => {
      const params = new URLSearchParams(window.location.search);
      const from = params.get("from");
      const to = params.get("to");

      const traducteurNameAndImg = JSON.parse(
        window.localStorage.getItem("trad")
      );

      if (from && to) {
        setTraduction((prevTraduction) => ({
          ...prevTraduction,
          from,
          to,
        }));

        if (traducteurNameAndImg?.img && traducteurNameAndImg?.name) {
          setTraduction((prevTraduction) => ({
            ...prevTraduction,
            traducteurName: traducteurNameAndImg.name,
            traducteur: traducteurNameAndImg.img,
          }));
        }
      }
    };

    getData();
  }, []);

  const notify = (devis) => toast(`Devis: ${devis}`);
  const handleSendDevis = async () => {
    const devis = await createDevis(devisData);
    if (!devis) console.error("error: ", devis);
    notify(devis.data.devis);
  };

  return (
    <div className="devis-main-container">
      <section className="devis-head-section">
        <img src={headerImg} alt="Header" className="devis-header-img" />
        <div>
          <h1 className="devis-title">La traduction certifiée</h1>
          <h2 className="devis-subtitle">
            Obtenez une traduction certifiée fiable et rapide dès MAINTENANT!
          </h2>
          <p className="devis-description">
            Ne perdez plus de temps, obtenez une traduction certifiée fiable et
            rapide dès maintenant!
          </p>
          <button type="button" className="devis-button">
            Commencer maintenant
          </button>
        </div>
      </section>
      <section className="devis-form-section">
        <div className="devis-translator">
          <img
            src={traduction.traducteur}
            alt="Traducteur"
            className="devis-trad-img"
          />
          <div>
            <h3>{traduction.traducteurName}</h3>
            <p>Traductrice assermentée</p>
          </div>
        </div>
        <div className="devis-language-selection">
          <p>De:</p>
          <div className="devis-select-container">
            <select
              onChange={(e) =>
                setTraduction({ ...traduction, from: e.target.value })
              }
              className="devis-select"
              value={traduction.from}
            >
              <option value="Français">Français</option>
              <option value="Anglais">Anglais</option>
              <option value="Italien">Italien</option>
              <option value="Allemand">Allemand</option>
            </select>
            <img src={getFlag(traduction.from)} alt="From Flag" />
          </div>
          <p>À:</p>
          <div className="devis-select-container">
            <select
              className="devis-select"
              onChange={(e) =>
                setTraduction({ ...traduction, to: e.target.value })
              }
              value={traduction.to}
            >
              <option value="Anglais">Anglais</option>
              <option value="Français">Français</option>
              <option value="Italien">Italien</option>
              <option value="Allemand">Allemand</option>
            </select>
            <img src={getFlag(traduction.to)} alt="To Flag" />
          </div>
        </div>
      </section>
      <form className="devis-form" onSubmit={(e) => e.preventDefault()}>
        <div className="devis-form-row">
          <input
            onChange={(e) =>
              setDevisData({ ...devisData, LastClientName: e.target.value })
            }
            type="text"
            placeholder="Nom"
            required
          />
          <input
            onChange={(e) =>
              setDevisData({ ...devisData, FirstClientName: e.target.value })
            }
            type="text"
            placeholder="Prénom"
            required
          />
          <input
            onChange={(e) =>
              setDevisData({ ...devisData, Email: e.target.value })
            }
            type="text"
            placeholder="Email"
            required
          />
        </div>
        <select
          onChange={(e) =>
            setDevisData({ ...devisData, Language_Doc: e.target.value })
          }
          className="devis-form-select"
          required
        >
          {/* 
          <option value="" disabled selected>
            Sélectionner la langue de traduction
          </option> */}
          <option value="Anglais">Anglais</option>
          <option value="Français">Français</option>
          <option value="Italien">Italien</option>
          <option value="Allemand">Allemand</option>
        </select>
        <input
          type="file"
          name="importfile"
          className="devis-form-file-import"
          required
        />
        <button
          type="button"
          className="devis-form-button"
          onClick={handleSendDevis}
        >
          Voir le devis
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Devis;

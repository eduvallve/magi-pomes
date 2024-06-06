import logo from "../magi_pomes_logo.svg";
import './infobox.css';

const InfoBox = () => {
  return (
    <div className="info_box">
      <img
        src={logo}
        alt="Magí Pomés al Rif. Postals de la Guerra del Marroc"
        className="info_box--logo"
      />
      <p className="info_box--content">
        Magí Pomés fou un tarragoní que a principis de s.XX va ser cridat a
        unir-se a l'exèrcit Espanyol en una campanya a les acaballes de la
        Guerra del Rif, també anomenada “Guerra del Marroc” o “Guerra d'Àfrica”.
        Durant la seva estada a la zona, es cartejava amb els familiars a través
        de postals que són, en si mateixes, cròniques cruents del moment i un
        trosset de memòria històrica.
      </p>
    </div>
  );
};

export default InfoBox;

import React from "react";
import { formatPrice } from "../utilities";
import useAndCheckMacBookDetails from "./providers/useAndCheckMacBookDetails";
import Validation from "./Validation";

const Confirmation = ({ setStep }) => {
  const { productInfos, subtotal } = useAndCheckMacBookDetails();

  return (
    <>
      <div
        className="bg-white p-3 d-flex-flex-column"
        style={{ borderRadius: "14px" }}
      >
        <h3 className="text-center">
          Bravo. Voici votre configuration finale !
        </h3>

        <ul className="list-unstyled mt-4">
          <li>
            Puce Apple M2 avec CPU 8 cœurs, GPU 10 cœurs, Neural Engine 16 cœurs
          </li>
          <li>{productInfos.capacityRam} de mémoire unifiée</li>
          <li>SSD de {productInfos.capacitySsd}</li>
          <li>Écran Liquid Retina 15,3 pouces avec True Tone³</li>
          <li>Caméra FaceTime HD 1080p</li>
          <li>Port de charge MagSafe 3</li>
          <li>Deux ports Thunderbolt/USB 4</li>
          <li>Adaptateur secteur double port USB-C 35 W</li>
          <li>Magic Keyboard rétroéclairé avec Touch ID - Français</li>
        </ul>
        <h4 className="green">{`${formatPrice(subtotal)} €`}</h4>

        <Validation setStep={setStep} nextLevel="cartStep" />
      </div>
    </>
  );
};

export default Confirmation;

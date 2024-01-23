import React from "react";
import macbookImg from "../images/macbook.jpg";
import { formatPrice } from "../utilities";
import useAndCheckMacBookDetails from "./providers/useAndCheckMacBookDetails";

function ProductInfos() {
  const { productInfos, subtotal } = useAndCheckMacBookDetails();

  return (
    <>
      <div className="col-md-6 mt-3">
        <div
          className="bg-white p-3 d-flex flex-column"
          style={{ borderRadius: "14px" }}
        >
          <img
            className="img-fluid"
            src={macbookImg}
            alt="Macbook Air"
            width={350}
          />
        </div>
        <h5 className="mt-4">MacBook Air - Gris sidéral</h5>
        <h4 className="green">{formatPrice(subtotal)} €</h4>
      </div>
      <div className="col-md-6 mt-3">
        <div className="bg-white p-3 d-flex flex-column">
          <h3>Personnalisez votre MacBook Air 15 pouces - Minuit</h3>
          <ul className="list-unstyled mt-4 d-flex flex-column">
            <li>
              Puce Apple M2 avec CPU 8 cœurs, GPU 10 cœurs, Neural Engine 16
              cœurs
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
        </div>
      </div>
    </>
  );
}

export default ProductInfos;

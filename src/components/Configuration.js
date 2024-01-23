import React from "react";
import ProductInfos from "./ProductInfos";
import Capacity from "./Capacity";
import Validation from "./Validation";

function Configuration({ setStep }) {
  return (
    <>
      <ProductInfos />
      <Capacity capacityType="ram" />
      <Capacity capacityType="ssd" />
      <Validation setStep={setStep} nextLevel="confirmationStep" />
    </>
  );
}

export default Configuration;

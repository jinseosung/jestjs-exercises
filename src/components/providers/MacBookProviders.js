import React, { useState } from "react";
import { formatSsdString } from "../../utilities";
import { MacBookContext } from "./context";

const MacBookProviders = (props) => {
  const initialState = {
    macBookPrice: 1199.0,
    capacityRam: "8 Go",
    capacitySsd: "256 Go",
    ram: 0,
    ssd: 0,
    inputssd: 0,
  };

  const [productInfos, setProductInfos] = useState(initialState);

  const handleRamChange = (e) => {
    const ramOption = e.target.options[e.target.selectedIndex].text;
    const ramQuantity = ramOption.substring(0, ramOption.indexOf("Go") + 2);
    const ramCapacity = parseInt(e.target.value);

    setProductInfos((prev) => ({
      ...prev,
      capacityRam: ramQuantity,
      ram: ramCapacity,
    }));
  };

  const handleSsdChange = (e) => {
    const ssdCapacity = parseInt(e.target.value);
    const formatedSsdString = formatSsdString(e.target.id);
    setProductInfos((prev) => ({
      ...prev,
      capacitySsd: formatedSsdString,
      ssd: ssdCapacity,
      inputssd: ssdCapacity,
    }));
  };

  const subtotal = parseInt(
    productInfos.macBookPrice + productInfos.ram + productInfos.ssd
  );

  const value = { productInfos, handleRamChange, subtotal, handleSsdChange };

  return <MacBookContext.Provider value={value} {...props} />;
};

export default MacBookProviders;

import React, { useState } from "react";
import { MacBookContext } from "./context";

const MacBookProviders = (props) => {
  const initialState = {
    capacityRam: "8 Go",
    capacitySsd: "256 Go",
  };

  const [productInfos, setProductInfos] = useState(initialState);

  const value = { productInfos };

  return <MacBookContext.Provider value={value} {...props} />;
};

export default MacBookProviders;

import { useContext } from "react";
import { MacBookContext } from "./context";

const useAndCheckMacBookDetails = () => {
  const values = useContext(MacBookContext);

  if (!values) {
    throw new Error("Accès refusé");
  }
  
  return values;
};

export default useAndCheckMacBookDetails;

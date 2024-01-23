import React, { useEffect, useState } from "react";
import axios from "axios";
import CapacityWrapper from "./CapacityWrapper";
import RamCapacities from "./RamCapacities";
import SsdCapacities from "./SsdCapacities";
import AlertError from "./AlertError";
import useAndCheckMacBookDetails from "./providers/useAndCheckMacBookDetails";

const Capacity = ({ capacityType }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);

  const { handleRamChange, handleSsdChange, productInfos } =
    useAndCheckMacBookDetails();

  useEffect(() => {
    // fetch(`http://localhost:3030/${capacityType}`)
    //   .then((res) => res.json())
    //   .then((data) => setItems(data))
    //   .catch((err) => console.log(err));

    axios
      .get(`http://localhost:3030/${capacityType}`)
      .then((res) => setItems(res.data))
      .catch((err) => setError(true));
  }, [capacityType]);

  if (error) {
    return <AlertError />;
  }

  return (
    <div>
      {capacityType === "ram" ? (
        <CapacityWrapper capacityType={capacityType}>
          <select
            className="form-select form-select-outline w-50"
            aria-label="Default select"
            onChange={handleRamChange}
          >
            {items.map((capacity) => (
              <RamCapacities
                key={capacity.id}
                option={capacity.option}
                price={capacity.price}
              />
            ))}
          </select>
        </CapacityWrapper>
      ) : (
        <CapacityWrapper capacityType={capacityType}>
          {items.map((capacity) => (
            <SsdCapacities
              key={capacity.id}
              id={capacity.id}
              price={capacity.price}
              selectedSsd={productInfos.inputssd}
              label={capacity.label}
              handleSsdChange={handleSsdChange}
            />
          ))}
        </CapacityWrapper>
      )}
    </div>
  );
};

export default Capacity;

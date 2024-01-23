import { useState } from "react";
import "./App.css";
import Configuration from "./components/Configuration";
import Header from "./components/Header";
import MacBookProviders from "./components/providers/MacBookProviders";
import Confirmation from "./components/Confirmation";
import Cart from "./components/Cart";
import AlertError from "./components/AlertError";

function App() {
  // configurationStep => confirmationStep => cartStep
  const [step, setStep] = useState("configurationStep");

  let DisplayComponent = Configuration;

  switch (step) {
    case "configurationStep":
      DisplayComponent = Configuration;
      break;

    case "confirmationStep":
      DisplayComponent = Confirmation;
      break;

    case "cartStep":
      DisplayComponent = Cart;
      break;

    default:
      DisplayComponent = () => <AlertError />;
      break;
  }

  return (
    <div className="container">
      <div className="bg row d-flex pb-5">
        <Header />
        <MacBookProviders>
          <DisplayComponent setStep={setStep} />
        </MacBookProviders>
      </div>
    </div>
  );
}

export default App;

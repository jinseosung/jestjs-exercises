import "./App.css";
import Configuration from "./components/Configuration";
import Header from "./components/Header";
import MacBookProviders from "./components/providers/MacBookProviders";

function App() {
  return (
    <div className="container">
      <div className="bg row d-flex pb-5">
        <Header />
        <MacBookProviders>
          <Configuration />
        </MacBookProviders>
        <button>Valider</button>
      </div>
    </div>
  );
}

export default App;

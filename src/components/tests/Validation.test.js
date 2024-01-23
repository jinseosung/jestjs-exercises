import { render, screen } from "@testing-library/react";
import Validation from "../Validation";

describe("Validation component", () => {
  test("Validation button renders correctly", () => {
    render(<Validation nextLevel="confirmationStep" />);
    const btnConfirmation = screen.getByRole("button", { name: /valider/i });
    expect(btnConfirmation).toBeInTheDocument();
  });

  test("Ajouter au panier button renders correctly", () => {
    render(<Validation nextLevel="cartStep" />);
    const btnCart = screen.getByRole("button", { name: /ajouter/i });
    expect(btnCart).toBeInTheDocument();
  });
});

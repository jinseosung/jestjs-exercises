import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Validation from "../Validation";

describe("Validation component", () => {
  test("Validation button renders correctly", () => {
    render(<Validation nextLevel="confirmationStep" />);
    const btnConfirmation = screen.getByRole("button", { name: /valider/i });
    expect(btnConfirmation).toBeInTheDocument();
    // screen.logTestingPlaygroundURL()
  });

  test("Ajouter au panier button renders correctly", () => {
    render(<Validation nextLevel="cartStep" />);
    const btnCart = screen.getByRole("button", { name: /ajouter/i });
    expect(btnCart).toBeInTheDocument();
  });

  test("Setter setStep invoked only once to move to the confirmation step", async () => {
    const goToConfirmationStep = jest.fn();
    const user = userEvent.setup();
    render(
      <Validation setStep={goToConfirmationStep} nextLevel="confirmationStep" />
    );

    const btnConfirmation = screen.getByRole("button", { name: /valider/i });
    await user.click(btnConfirmation);
    expect(goToConfirmationStep).toHaveBeenCalledTimes(1);
  });

  test("Setter setStep invoked only once to move to the cart step", async () => {
    const goToConfirmationStep = jest.fn();
    const user = userEvent.setup();
    render(<Validation setStep={goToConfirmationStep} nextLevel="cartStep" />);

    const btnCart = screen.getByRole("button", { name: /ajouter/i });
    await user.click(btnCart);
    expect(goToConfirmationStep).toHaveBeenCalledTimes(1);
  });
});

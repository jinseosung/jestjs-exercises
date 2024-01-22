import { render, screen } from "@testing-library/react";
import Header from "../Header";

test("Header renders correctly", () => {
  render(<Header />);
  const h1 = screen.getByRole("heading", { name: /MacBook/, level: 1 });
  expect(h1).toBeInTheDocument();
  expect(h1).toHaveClass("fw-bold");
});

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Capacity from "../Capacity";

describe("Verify all capacities of RAM and SSD", () => {
  test("Test all informations of RAM", async () => {
    const user = userEvent.setup();

    render(<Capacity capacityType="ram" />);
    const paragrapheRam = screen.getByText(
      /sélectionnez la capacité de la mémoire/i
    );
    expect(paragrapheRam).toBeInTheDocument();

    const select = screen.getByRole("combobox", { name: /default select/i });
    expect(select).toBeInTheDocument();

    const allOptions = await screen.findAllByRole("option");
    expect(allOptions).toHaveLength(2);

    expect(screen.getByRole("option", { name: /8 Go/i }).selected).toBeTruthy();

    await user.selectOptions(select, "230");

    expect(select.value).toBe("230");
    expect(allOptions[1].selected).toBe(true);
  });

  test("Test all informations of SSD", async () => {
    const user = userEvent.setup();

    render(<Capacity capacityType="ssd" />);
    const paragrapheSsd = screen.getByText(
      /sélectionnez la capacité de stockage/i
    );
    expect(paragrapheSsd).toBeInTheDocument();

    const allRadios = await screen.findAllByRole("radio");
    expect(allRadios).toHaveLength(4);

    await user.click(allRadios[2]);
    expect(allRadios[2]).toBeChecked();
  });
});

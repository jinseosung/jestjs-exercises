import { rest } from "msw";
import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "../../test-utils";
import Configuration from "../Configuration";
import { server } from "../../mocks/server";

test("Testing RAM and SSD errors", async () => {
  server.resetHandlers(
    rest.get("http://localhost:3030/ram", (req, res, ctx) => {
      return res(ctx.status(500));
    }),
    rest.get("http://localhost:3030/ssd", (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  render(<Configuration />);

  //   const alerts = await screen.findAllByRole("alert");
  //   expect(alerts).toHaveLength(2);

  //   const alerts = await screen.findAllByText("Nous avons une erreur");
  //   expect(alerts).toHaveLength(2);

  // Situation 1
  //   screen.debug();

  await waitFor(async () => {
    const alerts = await screen.findAllByRole("alert");
    expect(alerts).toHaveLength(2);
  });

  // Situation 2
  //   screen.debug();
});

test("Updating the price and displaying product information based on the selected capacities", async () => {
  const user = userEvent.setup();
  render(<Configuration />);

  const productPrice = screen.getByRole("heading", {
    lever: 4,
    name: /1 199/i,
  });
  const capacityRam = screen.getByText("8 Go de mémoire unifiée");
  const capacitySsd = screen.getByText("SSD de 256 Go");

  const allRamOptions = await screen.findAllByRole("option");
  expect(allRamOptions).toHaveLength(2);

  const select = screen.getByRole("combobox", { name: /default select/i });
  await user.selectOptions(select, "230");
  expect(select.value).toBe("230");
  expect(allRamOptions[1].selected).toBeTruthy();

  expect(productPrice).toHaveTextContent("1 429,00");
  expect(capacityRam).toHaveTextContent("16 Go de mémoire unifiée");

  const inputSsd512 = await screen.findByLabelText("SSD de 512 Go (230 €)");
  await user.click(inputSsd512);
  expect(inputSsd512).toBeChecked();
  expect(productPrice).toHaveTextContent("1 659,00");
  expect(capacitySsd).toHaveTextContent("SSD de 512 Go");

  await user.selectOptions(select, "0");
  expect(select.value).toBe("0");
  expect(productPrice).toHaveTextContent("1 429,00");
  expect(capacityRam).toHaveTextContent("8 Go de mémoire unifiée");
});

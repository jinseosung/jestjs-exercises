import { displayPrice, formatPrice, formatSsdString } from "./index";

describe("Unit testing functions", () => {
  test("displayPrice", () => {
    expect(displayPrice(230)).toBe(`(230 €)`);
  });

  test("formatPrice", () => {
    expect(formatPrice(1199.0)).toBe(`1 199,00`);
  });

  test("formatSsdString", () => {
    expect(formatSsdString("512ssd")).toBe("512 Go");
    expect(formatSsdString("2tossd")).toBe("2 To");
  });
});

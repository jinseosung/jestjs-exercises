import { logRoles, prettyDOM, render, screen } from "../../test-utils";
import ProductInfos from "../ProductInfos";

test("Element render correctly", () => {
  render(<ProductInfos />);

  // const { container } = render(<ProductInfos />); // container: HTMLDivElement
  // logRoles(container);

  // console.log(prettyDOM(container));

  // Image
  const img = screen.getByRole("img", { name: /macbook/i });
  expect(img).toBeInTheDocument();
  expect(img).toHaveClass("img-fluid");

  // Name of product
  const h5 = screen.getByRole("heading", { level: 5, name: /Gris sidéral/i });
  expect(h5).toBeInTheDocument();
  expect(h5).toHaveClass("mt-4");

  // Price of product
  const h4 = screen.getByText("€", { exact: false });
  expect(h4).toBeInTheDocument();
  expect(h4).toHaveTextContent("1 199");

  // <li>
  const h3 = screen.getByRole("heading", { lever: 3, name: /Personnalisez/i });
  expect(h3).toBeInTheDocument();

  const lis = screen.queryAllByRole("listitem");
  expect(lis.length).toBe(9);

  const liArray = lis.map((item) => item.textContent);
  expect(liArray).toEqual([
    "Puce Apple M2 avec CPU 8 cœurs, GPU 10 cœurs, Neural Engine 16 cœurs",
    "8 Go de mémoire unifiée",
    "SSD de 256 Go",
    "Écran Liquid Retina 15,3 pouces avec True Tone³",
    "Caméra FaceTime HD 1080p",
    "Port de charge MagSafe 3",
    "Deux ports Thunderbolt/USB 4",
    "Adaptateur secteur double port USB-C 35 W",
    "Magic Keyboard rétroéclairé avec Touch ID - Français",
  ]);
});

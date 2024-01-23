import { render } from "@testing-library/react";
import MacBookProviders from "./components/providers/MacBookProviders";

const renderWithContext = (ui, options) =>
  render(ui, { wrapper: MacBookProviders, ...options });

// re-export everything
export * from '@testing-library/react'

// override render method
export { renderWithContext as render };

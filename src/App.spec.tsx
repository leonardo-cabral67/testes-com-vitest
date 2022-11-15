import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { App } from "./App";

describe("App", () => {
  it("Should have a Hello World in my App", async () => {
    render(<App />);

    const itemRegua = screen.findByText("Régua");

    await waitFor(() => {
      expect(itemRegua).toBeInTheDocument();
    });
  });
});

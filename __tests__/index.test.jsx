import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";
import { SessionProvider } from "next-auth/react";

describe("Home", () => {
  it("renders a heading", () => {
    render(
      <SessionProvider>
        <Home />
      </SessionProvider>
    );

    const heading = screen.getByRole("heading", {
      name: "Pot Black Snooker League",
    });

    expect(heading).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import MainPage from "../components/main/MainPage";
import "@testing-library/jest-dom";

describe("Main Page renders", () => {
  it("renders the heading", () => {
    render(<MainPage />);

    const heading = screen.getByText("Pot Black Snooker League");

    expect(heading).toBeInTheDocument();
  });
});

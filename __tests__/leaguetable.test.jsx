import { render, screen } from "@testing-library/react";
import TableRow from "../components/table/TableRow";
import "@testing-library/jest-dom";

describe("League Table", () => {
  it("renders the player", () => {
    const team = { name: "Teameroos", won: 6, lost: 3, percentage: 50 };
    const index = 1;
    render(<TableRow team={team} index={index} />);

    const heading = screen.getByText("Teameroos");

    expect(heading).toBeInTheDocument();
  });
});

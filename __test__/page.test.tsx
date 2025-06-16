import { render } from "@testing-library/react";
import Home from "../app/(root)/page";

describe("Home Page", () => {
  it("renders correctly", () => {
    render(<Home />);
  });
});

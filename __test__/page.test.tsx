import { render } from "@testing-library/react";
import Home from "../app/page";

describe("Home Page", () => {
  it("renders correctly", () => {
    render(<Home />);
  });
});

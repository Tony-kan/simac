import React from "react";
// import { render, fireEvent, waitFor } from "@testing-library/react";
import { render } from "@testing-library/react";

import MainHeader from "@/components/shared/MainHeader";

describe("MainHeader component", () => {
  it("renders correctly", () => {
    const { container } = render(<MainHeader />);
    expect(container).toMatchSnapshot();
  });

  //   it("opens and closes mobile menu", () => {
  //     const { getByRole, getByText } = render(<MainHeader />);
  //     const menuButton = getByRole("button", { name: "Open menu" });
  //     fireEvent.click(menuButton);
  //     expect(getByText("Menu")).toBeInTheDocument();
  //     fireEvent.click(getByRole("button", { name: "Close menu" }));
  //     expect(getByText("Menu")).not.toBeInTheDocument();
  //   });

  //   it("opens and closes search bar", () => {
  //     const { getByRole, getByText } = render(<MainHeader />);
  //     const searchButton = getByRole("button", { name: "Open search" });
  //     fireEvent.click(searchButton);
  //     expect(getByText("Search and press enter...")).toBeInTheDocument();
  //     fireEvent.click(getByRole("button", { name: "Close search" }));
  //     expect(getByText("Search and press enter...")).not.toBeInTheDocument();
  //   });

  //   it("opens and closes quick links dropdown", () => {
  //     const { getByText, getByRole } = render(<MainHeader />);
  //     const quickLinksButton = getByRole("button", { name: "Quick Links" });
  //     fireEvent.mouseOver(quickLinksButton);
  //     expect(getByText("Quick Links")).toBeInTheDocument();
  //     fireEvent.mouseOut(quickLinksButton);
  //     expect(getByText("Quick Links")).not.toBeInTheDocument();
  //   });

  //   it("opens and closes mobile quick links dropdown", () => {
  //     const { getByText, getByRole } = render(<MainHeader />);
  //     const mobileMenuButton = getByRole("button", { name: "Open menu" });
  //     fireEvent.click(mobileMenuButton);
  //     const mobileQuickLinksButton = getByRole("button", { name: "Quick Links" });
  //     fireEvent.click(mobileQuickLinksButton);
  //     expect(getByText("Quick Links")).toBeInTheDocument();
  //     fireEvent.click(mobileQuickLinksButton);
  //     expect(getByText("Quick Links")).not.toBeInTheDocument();
  //   });
});

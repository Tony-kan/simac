import React from "react";
// import { render, fireEvent, waitFor } from "@testing-library/react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import MainHeader from "@/components/shared/MainHeader";
import { waitFor as rtlWaitFor } from "@testing-library/react";

// --- Mocks ---

// Mocking Next.js components with TypeScript props for type safety.
// We use React.ComponentProps to get the correct types for intrinsic elements like 'img'.
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: React.ComponentProps<"img">) => {
    return <img {...props} alt={props.alt} />;
  },
}));

// We use React.ComponentProps<'a'> to get the correct types for an anchor tag.
jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ children, ...props }: React.ComponentProps<"a">) => {
    // Mocking Link as a standard anchor tag.
    return <a {...props}>{children}</a>;
  },
}));

describe("MainHeader component", () => {
  it("renders correctly with logo and navigation", () => {
    render(<MainHeader />);
    // Check if the logo is rendered
    expect(screen.getByAltText("Logo")).toBeInTheDocument();

    // Check for a main navigation link (desktop)
    expect(screen.getByText("About")).toBeInTheDocument();

    // Check for a sub navigation link (desktop)
    expect(screen.getByText("Donate")).toBeInTheDocument();

    // Check for the mobile menu button
    expect(
      screen.getByRole("button", { name: /open menu/i })
    ).toBeInTheDocument();
  });

  it("opens and closes mobile menu on button click", async () => {
    render(<MainHeader />);
    const menuButton = screen.getByRole("button", { name: /open menu/i });

    fireEvent.click(menuButton);

    const menuTitle = await screen.findByText("Menu");
    expect(menuTitle).toBeInTheDocument();

    const closeButton = screen.getByRole("button", { name: /close menu/i });
    fireEvent.click(closeButton);

    await waitFor(() => {
      expect(screen.queryByText("Menu")).not.toBeInTheDocument();
    });
  });

  // it("closes mobile menu when a navigation link is clicked", async () => {
  //   render(<MainHeader />);
  //   fireEvent.click(screen.getByRole("button", { name: /open menu/i }));

  //   await waitFor(() => {
  //     expect(screen.queryByText("Menu")).not.toBeInTheDocument();
  //   });
  // });

  it("opens and closes search bar on button click", async () => {
    render(<MainHeader />);
    // There can be two search buttons (mobile/desktop), we grab the first one visible.
    const searchButton = screen.getAllByRole("button", {
      name: /open search/i,
    })[0];

    fireEvent.click(searchButton);

    const searchInput = await screen.findByPlaceholderText(
      /search and press enter/i
    );
    expect(searchInput).toBeInTheDocument();

    const closeSearchButton = screen.getByRole("button", {
      name: /close search/i,
    });
    fireEvent.click(closeSearchButton);

    await waitFor(() => {
      expect(
        screen.queryByPlaceholderText(/search and press enter/i)
      ).not.toBeInTheDocument();
    });
  });

  // it("shows and hides desktop quick links dropdown on hover", async () => {
  //   render(<MainHeader />);
  //   const quickLinksButton = screen.getByRole("button", {
  //     name: "Quick Links",
  //   });

  //   fireEvent.mouseEnter(quickLinksButton);

  //   expect(await screen.findByText("Register")).toBeVisible();

  //   fireEvent.mouseLeave(quickLinksButton);

  //   await waitFor(() => {
  //     expect(screen.queryByText("Register")).not.toBeInTheDocument();
  //   });
  // });
});
const waitFor = rtlWaitFor;

import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("renders posts if request is successful", async () => {
    // Arrange
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [
        { id: "p1", title: "First post" },
        { id: "p2", title: "Second post" },
        { id: "p3", title: "Third post" },
      ],
    });

    render(<Async />);

    // Act
    // ... nothing

    // Assert
    const listItemElements = await screen.findAllByRole(
      "listitem",
      {},
      { timeout: 10000 }
    );
    expect(listItemElements).not.toHaveLength(0);
  });
});

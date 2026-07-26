import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ResourceList } from "./ResourceList";

const mockResources = [
  {
    id: "1",
    category: "Podcasts",
    title: "A",
    thumbnail: "",
    tags: [],
    duration: 10,
    description: "",
    date_uploaded: "2025-01-01",
  },
  {
    id: "2",
    category: "Articles",
    title: "B",
    thumbnail: "",
    tags: [],
    duration: 5,
    description: "",
    date_uploaded: "2025-01-02",
  },
];

describe("ResourceList", () => {
  it("renders a heading for each category present in the data", () => {
    render(<ResourceList resources={mockResources} />);
    expect(
      screen.getByRole("heading", { name: "Podcasts" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Articles" }),
    ).toBeInTheDocument();
  });
});

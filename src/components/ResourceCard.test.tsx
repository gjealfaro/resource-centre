import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ResourceCard } from "./ResourceCard";

const mockResource = {
  id: "001",
  category: "Podcasts",
  title: "Mindful Moments",
  thumbnail: "https://example.com/photo.jpg",
  tags: ["wellbeing", "mindfulness", "relaxation"],
  duration: 25,
  description: "A calming podcast.",
  date_uploaded: "2025-07-10",
};

describe("ResourceCard", () => {
  it("renders the resource title", () => {
    render(<ResourceCard resource={mockResource} />);
    expect(screen.getByText("Mindful Moments")).toBeInTheDocument();
  });

  it("renders the thumbnail image", () => {
    render(<ResourceCard resource={mockResource} />);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", mockResource.thumbnail);
  });
  it("renders up to 3 tags", () => {
    render(<ResourceCard resource={mockResource} />);
    expect(screen.getByText("wellbeing")).toBeInTheDocument();
    expect(screen.getByText("mindfulness")).toBeInTheDocument();
    expect(screen.getByText("relaxation")).toBeInTheDocument();
  });
});

import { render, screen, fireEvent } from "@testing-library/react";
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

  it("renders the duration in minutes", () => {
    render(<ResourceCard resource={mockResource} />);
    expect(screen.getByText(/25 min/i)).toBeInTheDocument();
  });

  it("does not render an img element when thumbnail is missing", () => {
    const resourceWithoutThumbnail = { ...mockResource, thumbnail: "" };
    render(<ResourceCard resource={resourceWithoutThumbnail} />);
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });

  it("shows description and date when the card is clicked", () => {
    render(<ResourceCard resource={mockResource} />);
    fireEvent.click(screen.getByText(mockResource.title));
    expect(screen.getByText(mockResource.description)).toBeInTheDocument();
    expect(screen.getByText(mockResource.date_uploaded)).toBeInTheDocument();
  });

  it("does not show description or date before the card is clicked", () => {
    render(<ResourceCard resource={mockResource} />);
    expect(
      screen.queryByText(mockResource.description),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText(mockResource.date_uploaded),
    ).not.toBeInTheDocument();
  });

  it("hides description and date when clicked a second time", () => {
    render(<ResourceCard resource={mockResource} />);
    const title = screen.getByText(mockResource.title);
    fireEvent.click(title);
    fireEvent.click(title);
    expect(
      screen.queryByText(mockResource.description),
    ).not.toBeInTheDocument();
  });
});

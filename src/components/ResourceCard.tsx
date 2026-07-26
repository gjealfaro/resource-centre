import { useState } from "react";
import type { Resource } from "../types/Resource";

interface Props {
  resource: Resource;
}

export function ResourceCard({ resource }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="resource-card">
      {resource.thumbnail && (
        <img src={resource.thumbnail} alt={resource.title} />
      )}
      <button
        onClick={() => setExpanded(!expanded)}
        style={{ all: "unset", cursor: "pointer" }}
      >
        {resource.title}
      </button>
      <ul>
        {resource.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <span>{resource.duration} min</span>

      {expanded && (
        <div>
          <p>{resource.description}</p>
          <p>{resource.date_uploaded}</p>
        </div>
      )}
    </div>
  );
}

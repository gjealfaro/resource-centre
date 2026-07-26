import { useState } from "react";
import type { Resource } from "../types/Resource";

interface Props {
  resource: Resource;
}

export function ResourceCard({ resource }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      {resource.thumbnail && (
        <img src={resource.thumbnail} alt={resource.title} />
      )}
      <p onClick={() => setExpanded(!expanded)}>{resource.title}</p>
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

import { Resource } from "../types/Resource";

interface Props {
  resource: Resource;
}

export function ResourceCard({ resource }: Props) {
  return (
    <div>
      <img src={resource.thumbnail} alt={resource.title} />
      <p>{resource.title}</p>
      <ul>
        {resource.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </div>
  );
}

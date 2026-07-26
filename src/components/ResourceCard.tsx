import { Resource } from "../types/Resource";

interface Props {
  resource: Resource;
}

export function ResourceCard({ resource }: Props) {
  return (
    <div>
      <img src={resource.thumbnail} alt={resource.title} />
      {resource.title}
    </div>
  );
}

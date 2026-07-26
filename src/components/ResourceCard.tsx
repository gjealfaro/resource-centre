import { Resource } from "../types/Resource";

interface Props {
  resource: Resource;
}

export function ResourceCard({ resource }: Props) {
  return <div>{resource.title}</div>;
}

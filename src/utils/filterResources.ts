import type { Resource } from '../types/Resource';

export function filterResources(resources: Resource[], query: string): Resource[] {
  const lower = query.toLowerCase();
  return resources.filter(
    (r) =>
      r.title.toLowerCase().includes(lower) ||
      r.tags.some((tag) => tag.toLowerCase().includes(lower))
  );
}
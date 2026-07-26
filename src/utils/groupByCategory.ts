import { Resource } from '../types/Resource';

export function groupByCategory(resources: Resource[]): Record<string, Resource[]> {
  return resources.reduce((acc, resource) => {
    if (!acc[resource.category]) {
      acc[resource.category] = [];
    }
    acc[resource.category].push(resource);
    return acc;
  }, {} as Record<string, Resource[]>);
}
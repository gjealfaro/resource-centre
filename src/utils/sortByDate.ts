import type { Resource } from '../types/Resource';

export function sortByDate(resources: Resource[]): Resource[] {
  return [...resources].sort((a, b) => b.date_uploaded.localeCompare(a.date_uploaded));
}
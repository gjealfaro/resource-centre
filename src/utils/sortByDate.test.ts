import { describe, it, expect } from 'vitest';
import { sortByDate } from './sortByDate';
import type { Resource } from '../types/Resource';

const mockResources: Resource[] = [
  { id: '1', category: 'Articles', title: 'Older', thumbnail: '', tags: [], duration: 5, description: '', date_uploaded: '2025-06-22' },
  { id: '2', category: 'Podcasts', title: 'Newer', thumbnail: '', tags: [], duration: 25, description: '', date_uploaded: '2025-07-10' },
];

describe('sortByDate', () => {
  it('sorts resources by date_uploaded, most recent first', () => {
    const sorted = sortByDate(mockResources);
    expect(sorted).toEqual([mockResources[1], mockResources[0]]);
  });
});
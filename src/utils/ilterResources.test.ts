import { describe, it, expect } from 'vitest';
import { filterResources } from './filterResources';
import type { Resource } from '../types/Resource';

const mockResources: Resource[] = [
  { id: '1', category: 'Articles', title: 'The Science of Sleep', thumbnail: '', tags: ['sleep', 'science'], duration: 8, description: '', date_uploaded: '2025-06-22' },
  { id: '2', category: 'Podcasts', title: 'Mindful Moments', thumbnail: '', tags: ['wellbeing', 'mindfulness'], duration: 25, description: '', date_uploaded: '2025-07-10' },
];

describe('filterResources', () => {
  it('filters resources by title match', () => {
    const result = filterResources(mockResources, 'sleep');
    expect(result).toEqual([mockResources[0]]);
  });
});
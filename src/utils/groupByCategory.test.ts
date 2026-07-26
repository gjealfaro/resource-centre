import { describe, it, expect } from 'vitest';
import { groupByCategory } from './groupByCategory';

describe('groupByCategory', () => {
  it('returns an empty object when given an empty array', () => {
    expect(groupByCategory([])).toEqual({});
  });

  it('groups a single resource under its category', () => {
    const input: Resource[] = [
      {
        id: '1',
        category: 'Podcasts',
        title: 'Test',
        thumbnail: '',
        tags: [],
        duration: 10,
        description: '',
        date_uploaded: '2025-01-01',
      },
    ];
    expect(groupByCategory(input)).toEqual({ Podcasts: [input[0]] });
      });
});
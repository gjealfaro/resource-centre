import { describe, it, expect } from 'vitest';
import { groupByCategory } from './groupByCategory';

describe('groupByCategory', () => {
  it('returns an empty object when given an empty array', () => {
    expect(groupByCategory([])).toEqual({});
  });
});
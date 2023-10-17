'use strict';

describe('isIsogram', () => {
  const { isIsogram } = require('./isIsogram');

  it(`should be declared`, () => {
    expect(isIsogram).toBeInstanceOf(Function);
  });

  it('should return true for empty string', () => {
    expect(isIsogram('')).toBe(true);
  });

  it('should return true for isogram word', () => {
    expect(isIsogram('playgrounds')).toBe(true);
  });

  it('should return false for repeated chars', () => {
    expect(isIsogram('blablacar')).toBe(false);
  });

  it('should be case-insensitive', () => {
    expect(isIsogram('Adam')).toBe(false);
  });
});

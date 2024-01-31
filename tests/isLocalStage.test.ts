import {isLocalStage} from 'src/isLocalStage';
import {describe, expect, it} from 'vitest';

describe('isLocalStage', () => {
  it('returns false for a "pr" stage', () => {
    expect(isLocalStage('pr123')).toEqual(false);
  });

  it('returns false for a "dev" stage', () => {
    expect(isLocalStage('dev')).toEqual(false);
  });

  it('returns false for a "staging" stage', () => {
    expect(isLocalStage('staging')).toEqual(false);
  });

  it('returns false for a "prod" stage', () => {
    expect(isLocalStage('prod')).toEqual(false);
  });

  it('returns true for a "test" stage', () => {
    expect(isLocalStage('test')).toEqual(true);
  });

  it('returns true for a "personal" stage', () => {
    expect(isLocalStage('personal')).toEqual(true);
  });
});

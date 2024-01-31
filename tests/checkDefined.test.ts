import {checkDefined, UndefinedValueError} from 'src/checkDefined';
import {describe, expect, it} from 'vitest';

describe('checkDefined', () => {
  it('throws an error when value is undefined', () => {
    expect(() => checkDefined(undefined)).toThrowError(
      new UndefinedValueError('Should be defined')
    );
  });

  it('throws an error when value is null', () => {
    expect(() => checkDefined(null)).toThrowError(
      new UndefinedValueError('Should be defined')
    );
  });

  it('works for Object', () => {
    expect(checkDefined({test: 'test'})).toEqual({test: 'test'});
  });

  it('works for Number', () => {
    expect(checkDefined(123)).toEqual(123);
  });

  it('works for String', () => {
    expect(checkDefined('uniswap')).toEqual('uniswap');
  });

  it('works for Function', () => {
    const fn = () => {};
    expect(checkDefined(fn)).toEqual(fn);
  });

  it('works for Symbol', () => {
    const symbol = Symbol('success');
    expect(checkDefined(symbol)).toEqual(symbol);
  });

  it('works for BigInt', () => {
    const bigint = BigInt(12345);
    expect(checkDefined(bigint)).toEqual(bigint);
  });

  it('works for Array', () => {
    expect(checkDefined([])).toEqual([]);
  });

  it('works for Set', () => {
    const set = new Set();
    expect(checkDefined(set)).toEqual(set);
  });

  it('works for Map', () => {
    const map = new Map();
    expect(checkDefined(map)).toEqual(map);
  });

  it('works for RegExp', () => {
    const regexp = /a/;
    expect(checkDefined(regexp)).toEqual(regexp);
  });

  it('works for Date', () => {
    const date = new Date();
    expect(checkDefined(date)).toEqual(date);
  });
});

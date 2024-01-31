export class UndefinedValueError extends Error {}

export function checkDefined<T>(
  value: T | null | undefined,
  message = 'Should be defined'
): NonNullable<T> {
  if (value === null || value === undefined) {
    throw new UndefinedValueError(message);
  }
  return value;
}

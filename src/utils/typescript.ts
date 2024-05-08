/**
 * typeguard for undefined values in array --> https://stackoverflow.com/questions/43118692/typescript-filter-out-nulls-from-an-array
 */
export const notEmpty = <TValue>(
  value: TValue | null | undefined,
): value is TValue => {
  return value !== null && value !== undefined;
};

export const hasProp = <T extends object, K extends PropertyKey>(
  obj: T,
  prop: K,
): obj is Extract<T, { [P in K]?: K }> => prop in obj;

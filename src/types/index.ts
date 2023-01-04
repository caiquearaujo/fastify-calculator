export type TReducer<T = number> = (prev: T, curr: T) => T;
export type TFnReduce<T = number> = (fn: TReducer<T>, args: T[]) => T;
export type TFnOperation<T = number> = (args: T[]) => T;

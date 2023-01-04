export type TReducer<T = number> = (prev: T, curr: T) => T;
export type TFnReduce<T = number> = (fn: TReducer<T>, args: T[]) => T;
export type TFnOperation<T = number> = (args: T[]) => T;

export interface IPublicCalculator<T = number> {
	perform(name: string, ...args: T[]): T;
	available(): string[];
}

export interface IPrivateCalculator<T = number> extends IPublicCalculator<T> {
	register(name: string, fn: TFnOperation<T>): void;
}

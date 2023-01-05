import { IPrivateCalculator, IPublicCalculator, TFnOperation } from '@/types';

export default class BaseCalculator<T = number>
	implements IPrivateCalculator<T>
{
	private operations: Record<string, TFnOperation<T>> = {};

	register(name: string, fn: TFnOperation<T>) {
		this.operations[name] = fn;
	}

	perform(name: string, ...args: T[]): T {
		if (name in this.operations) {
			return this.operations[name](args);
		}

		throw new Error(`Operation "${name}" is not registered`);
	}

	available(): string[] {
		return Object.keys(this.operations);
	}

	static create(): IPublicCalculator<number> {
		throw new Error('You have to implement this method!');
	}
}

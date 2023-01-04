import { TFnOperation, TFnReduce } from './types';

const reduce: TFnReduce = (fn, args) => {
	if (args.length <= 1) {
		return args[0] ?? 0;
	}

	const initial = args[0];

	args.shift();
	return args.reduce(fn, initial);
};

const sum: TFnOperation = args => {
	return reduce((prev, curr) => prev + curr, args);
};

const sub: TFnOperation = args => {
	return reduce((prev, curr) => prev - curr, args);
};

const mul: TFnOperation = args => {
	return reduce((prev, curr) => prev * curr, args);
};

const div: TFnOperation = args => {
	return reduce((prev, curr) => prev / curr, args);
};

export { sum, sub, mul, div };

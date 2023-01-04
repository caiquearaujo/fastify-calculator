import { sum, sub, mul, div, square } from '@/operations';

describe('Operações Matemáticas', () => {
	const sumDataset = [
		{ input: [], output: 0 },
		{ input: [4], output: 4 },
		{ input: [1, 2, 3], output: 6 },
		{ input: [2, 2], output: 4 },
	];

	it.each(sumDataset)(
		'ao somar a entrada $input devo retornar $output',
		({ input, output }) => {
			expect(sum(input)).toBe(output);
		}
	);

	const subDataset = [
		{ input: [5, 7], output: -2 },
		{ input: [5, 5], output: 0 },
	];

	it.each(subDataset)(
		'ao subtrair a entrada $input devo retornar $output',
		({ input, output }) => {
			expect(sub(input)).toBe(output);
		}
	);

	const mulDataset = [
		{ input: [5, 7], output: 35 },
		{ input: [5, 5], output: 25 },
	];

	it.each(mulDataset)(
		'ao multiplicar a entrada $input devo retornar $output',
		({ input, output }) => {
			expect(mul(input)).toBe(output);
		}
	);

	const divDataset = [
		{ input: [10, 2], output: 5 },
		{ input: [20, 4], output: 5 },
	];

	it.each(divDataset)(
		'ao dividir a entrada $input devo retornar $output',
		({ input, output }) => {
			expect(div(input)).toBe(output);
		}
	);

	const squareDataset = [
		{ input: [5], output: 25 },
		{ input: [4], output: 16 },
	];

	it.each(squareDataset)(
		'ao calcular a raiz da entrada $input devo retornar $output',
		({ input, output }) => {
			expect(square(input)).toBe(output);
		}
	);

	const squareErrorDataset = [{ input: [] }, { input: [1, 2] }];

	it.each(squareErrorDataset)(
		'ao calcular a raiz com a entrada $input devo retornar erro',
		({ input }) => {
			expect(() => square(input)).toThrowError();
		}
	);
});

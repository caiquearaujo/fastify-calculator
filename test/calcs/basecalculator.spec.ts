import BaseCalculator from '@/calcs/basecalculator';
import { sub, sum } from '@/operations';

describe('Objeto base para calculadoras', () => {
	it('registro de operações', () => {
		const calc = new BaseCalculator();

		calc.register('sum', sum);
		expect(calc.available()).toStrictEqual(['sum']);

		calc.register('sub', sub);
		expect(calc.available()).toStrictEqual(['sum', 'sub']);
	});

	it('executa uma operação existente', () => {
		const calc = new BaseCalculator();

		calc.register('sum', sum);
		expect(calc.perform('sum', 1, 2, 3)).toBe(6);
	});

	it('retorna erro ao executar uma operação inexistente', () => {
		const calc = new BaseCalculator();
		expect(() => calc.perform('sum', 1)).toThrowError();
	});

	it('retorna erro ao utilizar um método não implementado', () => {
		expect(() => BaseCalculator.create()).toThrowError();
	});
});

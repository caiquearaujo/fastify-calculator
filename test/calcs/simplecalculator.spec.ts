import SimpleCalculator from '@/calcs/simplecalculator';

describe('Calculadora de operações simples', () => {
	it('cria uma instância com a operação sum,sub,mul,div', () => {
		const calc = SimpleCalculator.create();

		expect(calc instanceof SimpleCalculator).toBeTruthy();
		expect(calc.available()).toStrictEqual(['sum', 'sub', 'mul', 'div']);
	});
});

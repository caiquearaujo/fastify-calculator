import ComplexCalculator from '@/calcs/complexcalculator';

describe('Calculadora de operações complexas', () => {
	it('cria uma instância com a operação square', () => {
		const calc = ComplexCalculator.create();

		expect(calc instanceof ComplexCalculator).toBeTruthy();
		expect(calc.available()).toStrictEqual(['square']);
	});
});

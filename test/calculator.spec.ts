import ComplexCalculator from '@/calcs/complexcalculator';
import SimpleCalculator from '@/calcs/simplecalculator';
import Calculator from '@/calculator';

describe('Calculadora', () => {
	it('retorna uma calculadora com as operações simples', () => {
		const calc = new Calculator();

		expect(calc.simple() instanceof SimpleCalculator).toBeTruthy();
	});

	it('retorna uma calculadora com as operações complexas', () => {
		const calc = new Calculator();

		expect(calc.complex() instanceof ComplexCalculator).toBeTruthy();
	});
});

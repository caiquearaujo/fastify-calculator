import ComplexCalculator from '@/calcs/complexcalculator';
import SimpleCalculator from '@/calcs/simplecalculator';
import { IPublicCalculator } from '@/types';

export default class Calculator {
	private simpleCalc: IPublicCalculator<number>;

	private complexCalc: IPublicCalculator<number>;

	constructor() {
		this.simpleCalc = SimpleCalculator.create();
		this.complexCalc = ComplexCalculator.create();
	}

	simple() {
		return this.simpleCalc;
	}

	complex() {
		return this.complexCalc;
	}
}

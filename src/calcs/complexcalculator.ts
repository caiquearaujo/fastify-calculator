import { square } from '@/operations';
import { IPrivateCalculator, IPublicCalculator } from '@/types';
import BaseCalculator from './basecalculator';

export default class ComplexCalculator
	extends BaseCalculator<number>
	implements IPrivateCalculator<number>
{
	static create(): IPublicCalculator<number> {
		const obj = new ComplexCalculator();

		obj.register('square', square);

		return obj;
	}
}

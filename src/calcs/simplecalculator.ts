import { div, mul, sub, sum } from '../operations';
import { IPrivateCalculator, IPublicCalculator } from '../types';
import BaseCalculator from './basecalculator';

export default class SimpleCalculator
	extends BaseCalculator<number>
	implements IPrivateCalculator<number>
{
	static create(): IPublicCalculator<number> {
		const obj = new SimpleCalculator();

		obj.register('sum', sum);
		obj.register('sub', sub);
		obj.register('mul', mul);
		obj.register('div', div);

		return obj;
	}
}

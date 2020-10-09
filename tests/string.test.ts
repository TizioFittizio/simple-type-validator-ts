import { TypesConverterTest, SAME, ERROR } from './TypesConverterTest';
import { V } from '../lib';

it('should validate string with coercion allowed correctly', () => {
    const expectedResults = {
        booleanTrue: 'true',
        booleanFalse: 'false',
        number1: '1',
        number0: '0',
        numberMinus1: '-1',
        stringTrue: SAME,
        stringFalse: SAME,
        string1: SAME,
        string0: SAME,
        stringMinus1: SAME,
        stringEmpty: SAME,
        stringNull: SAME,
        stringDate: SAME,
        null: ERROR,
        undefined: ERROR,
        infinity: 'Infinity',
        minusInfinity: '-Infinity',
        array: ERROR,
        object: ERROR,
        arrayOfArray: ERROR,
        arrayWith0: ERROR,
        arrayWith1: ERROR,
        nan: 'NaN'
    };
    const test = new TypesConverterTest(expectedResults, V.String, {});
    test.executeTest();
});
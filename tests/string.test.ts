import { TypesConverterTest, SAME, ERROR } from './TypesConverterTest';
import { V } from '../lib/V';
import { Nullable, Optional, Strict } from '../lib/SchemaType';

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

it('should validate string without coercion correctly', () => {
    const expectedResults = {
        booleanTrue: ERROR,
        booleanFalse: ERROR,
        number1: ERROR,
        number0: ERROR,
        numberMinus1: ERROR,
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
        infinity: ERROR,
        minusInfinity: ERROR,
        array: ERROR,
        object: ERROR,
        arrayOfArray: ERROR,
        arrayWith0: ERROR,
        arrayWith1: ERROR,
        nan: ERROR
    };
    const test = new TypesConverterTest(expectedResults, V.String, { Strict });
    test.executeTest();
});

it('should handle null value correctly', () => {
    const test1 = V.String()(null);
    expect(test1.error).toBeTruthy();
    const test2 = V.String({ Nullable })(null);
    expect(test2.result).toBeNull();
});

it('should handle undefined value correctly', () => {
    const test1 = V.String()(undefined);
    expect(test1.error).toBeTruthy();
    const test2 = V.String({ Optional })(null);
    expect(test2.result).toBeUndefined();
});
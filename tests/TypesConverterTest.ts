/* eslint-disable @typescript-eslint/no-magic-numbers */
/* eslint-disable no-extra-parens */
/* eslint-disable @typescript-eslint/no-explicit-any */

export interface TypesConverterTestExpectedResults {
    booleanTrue: any;
    booleanFalse: any;
    number1: any;
    number0: any;
    numberMinus1: any;
    stringTrue: any;
    stringFalse: any;
    string1: any;
    string0: any;
    stringMinus1: any;
    stringEmpty: any;
    stringNull: any;
    stringDate: any;
    null: any;
    undefined: any;
    infinity: any;
    minusInfinity: any;
    array: any;
    object: any;
    arrayOfArray: any;
    arrayWith0: any;
    arrayWith1: any;
    nan: any;
}

export type TypesConverterTestCallback = (x: any) => any;

export class TypesConverterTest {

    private static readonly TEST_VALUES: TypesConverterTestExpectedResults = {
        booleanTrue: true,
        booleanFalse: false,
        number1: 1,
        number0: 0,
        numberMinus1: -1,
        stringTrue: 'true',
        stringFalse: 'false',
        string1: '1',
        string0: '0',
        stringMinus1: '-1',
        stringEmpty: '',
        stringNull: 'null',
        stringDate: 'Thu, 01 Jan 1970 00:00:00 GMT',
        null: null,
        undefined: undefined,
        infinity: Infinity,
        minusInfinity: -Infinity,
        array: [],
        object: {},
        arrayOfArray: [[]],
        arrayWith0: [0],
        arrayWith1: [1],
        nan: NaN
    }

    private readonly expectedResults: TypesConverterTestExpectedResults;

    private readonly callback: TypesConverterTestCallback;

    public constructor(expectedResults: TypesConverterTestExpectedResults, callback: TypesConverterTestCallback){
        this.expectedResults = expectedResults;
        this.callback = callback;
    }

    public executeTest(){
        const { expectedResults, callback } = this;
        for (const [ key, value ] of Object.entries(TypesConverterTest.TEST_VALUES)){
            const valueToTest = value;
            const expectedResult = (expectedResults as any)[key];
            const result = callback(valueToTest);
            if (result !== expectedResult) this.throw(expectedResult, result);
        }
    }

    private throw(expected: string, result: string){
        throw new Error(`Types converter test failed, expected: ${expected}, result: ${result}`);
    }

}
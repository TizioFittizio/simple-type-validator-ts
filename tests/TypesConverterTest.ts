/* eslint-disable max-depth */
/* eslint-disable complexity */
/* eslint-disable @typescript-eslint/no-magic-numbers */
/* eslint-disable no-extra-parens */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { SchemaType, SchemaTypeOptions } from '../lib/SchemaType';

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

export const SAME = 'SAME';

export const ERROR = 'ERROR';

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

    private readonly schemaType: SchemaType;

    private readonly schemaTypeOptions: SchemaTypeOptions;

    public constructor(
        expectedResults: TypesConverterTestExpectedResults,
        schemaType: SchemaType,
        schemaTypeOptions: SchemaTypeOptions
    ){
        this.expectedResults = expectedResults;
        this.schemaType = schemaType;
        this.schemaTypeOptions = schemaTypeOptions;
    }

    public executeTest(){
        const { expectedResults, schemaType, schemaTypeOptions } = this;
        for (const [ key, value ] of Object.entries(TypesConverterTest.TEST_VALUES)){
            const valueToTest = value;
            const expectedResult = (expectedResults as any)[key];
            const output = schemaType(schemaTypeOptions)(valueToTest);
            if (output.error){
                if (expectedResult !== ERROR) this.throw(valueToTest, output.error, key);
            }
            else {
                if (expectedResult === SAME){
                    if (output.result !== valueToTest) this.throw(valueToTest, output.result, key);
                }
                else if (output.result !== expectedResult){
                    this.throw(expectedResult, output.result, key);
                }
            }
        }
    }

    private throw(expected: string, result: string, key: string){
        throw new Error(`Types converter test failed with key ${key}\n
Expected ${expected} ${typeof expected}, result: ${result} ${typeof result}`);
    }

}
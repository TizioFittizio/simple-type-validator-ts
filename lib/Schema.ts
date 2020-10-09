import { SchemaType, SchemaTypeOptions } from './SchemaType';
/* eslint-disable @typescript-eslint/no-explicit-any */

export interface SchemaDefinition {
    [key: string]: SchemaType;
}

export class Schema<T> {

    private readonly schemaObject: SchemaDefinition;

    public constructor(object: SchemaDefinition){
        this.schemaObject = object;
    }

    public validate(objectToValidate: any): { object: T, validationError?: string } {
        throw new Error('Not implemented');
    }

    public validateOrThrow(objectToValidate: any): objectToValidate is T {
        const { object, validationError } = this.validate(objectToValidate);
        if (validationError) throw new Error(validationError);
        return true;
    }

}
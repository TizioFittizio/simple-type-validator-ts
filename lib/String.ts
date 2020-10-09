import { SchemaType, SchemaTypeOptions } from './SchemaType';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const String: SchemaType = (options?: SchemaTypeOptions) => (value: any) => {
    if (value === null){
        if (options?.Nullable) return { result: value, error: null };
        else return { error: 'Value not nullable' };
    }
    if (value === undefined){
        if (options?.Optional) return { result: value, error: null };
        else return { error: 'Value not optional' };
    }
    if (typeof value === 'object') return { error: `${value} not a valid string` };
    if (typeof value !== 'string' && options?.Strict) return { error: `${value} not a valid string` };
    return {
        result: global.String(value),
        error: null
    };
};
import { SchemaType, SchemaTypeOptions } from './SchemaType';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const String: SchemaType = (options?: SchemaTypeOptions) => (value: any) => {
    if (value === null){
        if (options?.Nullable) return { result: null, error: null };
        else return { error: 'Value not nullable' };
    }
    return {
        result: global.String(value),
        error: null
    };
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type SchemaType = (options?: SchemaTypeOptions) => { result: any, error: string | null };

export interface SchemaTypeOptions {
    Nullable?: Nullable;
    Optional?: Optional;
    Strict?: Strict;
}

export type Nullable = 'TypeValidatorNullable';
export type Optional = 'TypeValidatorOptional';
export type Strict = 'TypeValidatorStrict';
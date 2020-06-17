export type SchemaType = (options?: SchemaTypeOptions) => { error: string | null };

export interface SchemaTypeOptions {
    Nullable?: Nullable;
    Optional?: Optional;
    Strict?: Strict;
}

export type Nullable = 'TypeValidatorNullable';
export type Optional = 'TypeValidatorOptional';
export type Strict = 'TypeValidatorStrict';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type SchemaType = (options?: SchemaTypeOptions) => (value: any) => { result?: any, error: string | null }

export interface SchemaTypeOptions {
    Nullable?: Nullable;
    Optional?: Optional;
    Strict?: Strict;
}

type Nullable = 'TypeValidatorNullable';
type Optional = 'TypeValidatorOptional';
type Strict = 'TypeValidatorStrict';

export const Nullable: Nullable = 'TypeValidatorNullable';
export const Optional: Optional = 'TypeValidatorOptional';
export const Strict: Strict = 'TypeValidatorStrict';
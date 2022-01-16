export {};

type DebugType = () => void;
type MirrorType = <T>(x: T) => T;
type SomeTypes = string | number | DebugType | MirrorType;

type FunctionType = Exclude<SomeTypes, string | number>;

type NonFunctionType = Exclude<SomeTypes, DebugType>;
type TypeExcludingFunction = Exclude<SomeTypes, Function>;

type FunctioTypeByExtract = Extract<SomeTypes, DebugType>;
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>;

type AllFunctionTypeByExtract = Extract<SomeTypes, Function>;

type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;

export {};

type Profile = {
  name: string;
  age?: number;
  zipCode: string;
};

type PartialType = Partial<Profile>;
type RequiredType = Required<Profile>;

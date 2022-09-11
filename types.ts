export type Unbox<T> = T extends { [k: string]: infer U } ? U : T extends (infer U)[] ? U : T;
export type isPrimitive<T> = T extends Unbox<T> ? T : never;
export type DeepNullable<T> = {
  [P in keyof T]?: T[P] extends isPrimitive<T[P]> ? T[P] | null : DeepNullable<T[P]>;
};
export type Nullable<T> = {
  [P in keyof T]?: T[P] | null;
};

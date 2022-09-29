type Mapped<N extends number, Result extends Array<unknown> = []> = Result["length"] extends N
  ? Result
  : Mapped<N, [...Result, Result["length"]]>;

// 0 , 1, 2 ... 494
export type NumberRange = Mapped<101>[number];

// type Texts<T extends PropertyKey> = T extends number ? `text${T}` : never;

// type T = null | "auto" | Texts<NumberRange>;

// type Dictionary = {
//   [Prop in NumberRange as `${Prop}`]: Prop;
// };

// //  0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 ... 494
// type N = Extract<T, `text${number}`> extends `text${infer R}`
//   ? R extends keyof Dictionary
//     ? Dictionary[R]
//     : never
//   : never;

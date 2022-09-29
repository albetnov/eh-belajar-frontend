type Mapped<N extends number, Result extends Array<unknown> = []> = Result["length"] extends N
  ? Result
  : Mapped<N, [...Result, Result["length"]]>;

export type NumberRange = Mapped<101>[number];

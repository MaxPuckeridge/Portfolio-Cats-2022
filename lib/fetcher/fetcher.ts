// https://stackoverflow.com/questions/51851677/how-to-get-argument-types-from-function-in-typescript
type ArgumentTypes<F extends Function> = F extends (...args: infer A) => any
  ? A
  : never;

type FetchArgs = ArgumentTypes<typeof fetch>;

export const fetcher = <T>(...args: FetchArgs) =>
  fetch(...args).then((res) => res.json() as T);

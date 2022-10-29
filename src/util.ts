export type Kebab<T extends string, A extends string = ""> =
  T extends `${infer F}${infer R}` ?
    Kebab<R, `${A}${F extends Lowercase<F> ? "" : "-"}${Lowercase<F>}`> :
    A;

function camelToKebab<T extends string>(string: T): Kebab<T> {
  return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase() as Kebab<T>;
}

function arrayify<T = unknown>(obj: T) {
  return obj instanceof Array
    ? obj
    : [obj]
}

function nullify<T = unknown>(value: T) {
  return (value && (value as unknown[]).length)
    ? value
    : null
}

export {camelToKebab, nullify, arrayify}


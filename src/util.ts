function camelToKebab(string: string) {
  return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
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

export {camelToKebab, arrayify, nullify}

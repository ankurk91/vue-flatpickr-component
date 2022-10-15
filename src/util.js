const camelToKebab = (string) => {
  return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
};

const arrayify = (obj) => {
  return obj instanceof Array ? obj : [obj];
};

const nullify = (value) => {
  return (value && value.length) ? value : null;
}

export {camelToKebab, arrayify, nullify}

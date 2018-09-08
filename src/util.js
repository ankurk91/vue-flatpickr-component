const camelToKebab = (string) => {
  return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
};

const arrayify = (obj) => {
  return obj instanceof Array ? obj : [obj];
};

const cloneObject = (obj) => {
  return Object.assign({}, obj);
};

export {camelToKebab, arrayify, cloneObject}

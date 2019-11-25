// Util functions
export const stringPath = arrayPath => arrayPath.join('.')

export const isValueUnit = object => {
  const keys = Object.keys(object.properties);
  return keys.length === 2 && keys.includes('value') && keys.includes('unit');
}

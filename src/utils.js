// Util functions
export const stringPath = arrayPath => arrayPath.join('.')

export const isValueUnit = object => {
  const keys = Object.keys(object.properties);
  return keys.length === 2 && keys.includes('value') && keys.includes('unit');
}

export const htmlInputType = schemaType => {
  switch (schemaType) {
    case 'string':
      return 'text';
    case 'number':
      return schemaType;
    default:
      return 'text';
  }
}

export const validationObject = props => {
  const ret = {};
  const fieldName = props.title || props.givenTitle || '';
  if (props.required) {
    ret.required = `${fieldName} required`.trim()
  }
  if (props.minimum) {
    ret.min = {
      value: props.minimum,
      message: `${fieldName} < ${props.minimum}`.trim()
    }
  }
  if (props.maximum) {
    ret.max = {
      value: props.maximum,
      message: `${fieldName} > ${props.maximum}`.trim()
    }
  }
  return ret;
} 

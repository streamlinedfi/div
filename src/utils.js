const { entries } = Object;

export const upperFirst = str => str.charAt(0).toUpperCase() + str.slice(1);

export const kebabCase = (string = '') =>
  string
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    ?.map(x => x.toLowerCase())
    ?.join('-') ?? '';

export function spacing(val, theme) {
  if (/(px|%)$/.test(val)) {
    return val;
  }

  if (typeof val === 'string') {
    return val;
  }

  if (val === 0) {
    return val;
  }

  return theme.spacing(val);
}

export function pixelate(val) {
  if (typeof val === 'number') {
    return `${val}px`;
  }
  return val;
}

export function getPropValue(props, media, ...propKeys) {
  let value;
  for (let i = 0; i < propKeys.length; i++) {
    const key = propKeys[i];
    if (media) {
      const mediaVal = props[`$${media}$${key}`];
      if (mediaVal) {
        value = mediaVal;
        break;
      }
    }
    const val = props[`$${key}`];
    if (val) {
      value = val;
      break;
    }
  }

  return value;
}

export function isPropPresent(props, media, ...propKeys) {
  return !!getPropValue(props, media, ...propKeys);
}

let ruleIndex = null;
export function getRuleIndex(rules) {
  if (ruleIndex) return ruleIndex;

  const index = {};
  entries(rules).forEach(([ruleProp, config]) => {
    ruleProp.split('|').forEach(prop => {
      index[prop] = config;
    });
  });
  ruleIndex = index;

  return index;
}

let mediaPropRegex = null;
export function getMediaPropRegex(theme) {
  if (mediaPropRegex) return mediaPropRegex;

  mediaPropRegex = new RegExp(
    `^\\$(${theme.Breakpoints.keys.join('|')})(\\$.*)`,
  );

  return mediaPropRegex;
}

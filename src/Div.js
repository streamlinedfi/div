import styled from 'styled-components';
import { cssWhiteList, divRules } from './rules';
import {
  getMediaPropRegex,
  getRuleIndex,
  kebabCase,
  upperFirst,
} from './utils';

const { keys } = Object;

/**
 * @example
 * <Div
 *   $w={690}
 *   $h={420}
 *   $mobile$w={320}
 * />
 */

export function renderCss(props, rules) {
  let css = '';

  const ruleIndex = getRuleIndex(rules);
  const mediaPropRegex = getMediaPropRegex(props.theme);

  let i = -1;
  const propKeys = keys(props);
  while (++i < propKeys.length) {
    const propExt = propKeys[i];

    if (/^\$/.test(propExt)) {
      const value = props[propExt];

      if (value !== false) {
        const match = propExt.match(mediaPropRegex) || [];
        const [, media, mediaPropExt] = match;

        const cleanProp = (mediaPropExt || propExt).slice(1);
        const parts = cleanProp.split('$');
        const prop = parts[0];
        const extensions = parts.slice(1);

        const foundRule =
          ruleIndex[prop] || (cssWhiteList[prop] && kebabCase(prop));

        if (foundRule) {
          const config = foundRule;
          const outputValue =
            config.withTheme && typeof value === 'function'
              ? value(props.theme)
              : value;
          const formattedValue = config.format
            ? config.format(outputValue, props.theme)
            : outputValue;

          let ruleCss = '';
          if (typeof config === 'string') {
            ruleCss = config;
          } else if (typeof config === 'function') {
            ruleCss = config(props, media, extensions);
          } else if (typeof config.css === 'function') {
            ruleCss = config.css(props, media, extensions);
          } else {
            ruleCss = config.css;
          }

          let cssString = '';
          const colons = ruleCss.match(/:/g);
          if (colons && colons.length > 1) {
            cssString = ruleCss;
          } else if (colons === null) {
            cssString = `${ruleCss}: ${formattedValue};`;
          } else {
            cssString = `${ruleCss.replace(/;$/, '')};`;
          }

          if (extensions.includes('important')) {
            cssString = cssString.replace(/;/g, ' !important;');
          }

          if (extensions.includes('hover') && !extensions.includes('focus')) {
            cssString = `&:hover,&:focus { ${cssString} }`;
          }

          if (extensions.includes('hover') && extensions.includes('focus')) {
            cssString = `&:hover { ${cssString} }`;
          }

          if (extensions.includes('focus')) {
            cssString = `&:focus { ${cssString} }`;
          }

          if (extensions.includes('active')) {
            cssString = `&:active { ${cssString} }`;
          }

          if (extensions.includes('last')) {
            cssString = `&:last-child { ${cssString} }`;
          }

          if (extensions.includes('odd')) {
            cssString = `&:nth-child(odd) { ${cssString} }`;
          }

          if (extensions.includes('even')) {
            cssString = `&:nth-child(even) { ${cssString} }`;
          }

          if (media) {
            const cssMedia = props.theme.Breakpoints.getCssMedia(
              props.theme.Breakpoints[upperFirst(media)],
            );
            cssString = `${cssMedia} { ${cssString} }`;
          }

          css += cssString;
        }
      }
    }
  }

  return css;
}

export const divMixin = props => renderCss(props, divRules);

const Div = styled.div`
  ${props => divMixin(props)}
`;

export default Div;

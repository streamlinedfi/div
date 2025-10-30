/* eslint-disable no-nested-ternary */
import { getPropValue, isPropPresent, pixelate, spacing } from './utils';

const { fromEntries } = Object;

export const cssWhiteList = fromEntries(
  [
    'display',
    'align',
    'vAlign',
    'alignItems',
    'alignContent',
    'alignSelf',
    'justifyContent',
    'justifySelf',
    'flexDirection',
    'flexBasis',
    'flexWrap',
    'pointerEvents',
    'cursor',
    'position',
    'opacity',
    'backgroundColor',
    'backgroundImage',
    'backgroundSize',
    'backgroundPosition',
    'backgroundRepeat',
    'transform',
    'transformOrigin',
    'textDecoration',
    'textWrap',
    'animation',
    'fontWeight',
    'gap',
    'gridTemplateColumns',
    'gridTemplateRows',
    'wordBreak',
    'whiteSpace',
    'textOverflow',
    'overflow',
    'overflowX',
    'overflowY',
    'textAlign',
    'transitionDelay',
    'filter',
    'listStyle',
    'objectFit',
    'objectPosition',
    'willChange',
    'boxSizing',
  ].map(prop => [prop, 1]),
);

// short hand rules for the div component
export const divRules = {
  inline: 'display: inline',
  block: 'display: block',
  flex: `
    display: flex;
    width: 100%;
  `,
  autoFlex: `
    display: flex;
    width: auto;
  `,
  grid: `
    display: grid;
  `,
  hide: 'display: none',
  inlineBlock: 'display: inline-block',
  inlineFlex: 'display: inline-flex',
  'column|col': 'flex-direction: column;',
  row: 'flex-direction: row;',
  spaceBetween: 'justify-content: space-between;',
  wrap: 'flex-wrap: wrap;',
  innerCenter: (props, media) =>
    isPropPresent(props, media, 'flex', 'inlineFlex')
      ? `
          justify-content: center;
          align-items: center;
        `
      : `
          text-align: center;
          ${
            isPropPresent(props, media, 'h', 'height')
              ? `line-height: ${getPropValue(props, media, 'h', 'height')};`
              : ''
          }
        `,
  innerLeft: (props, media) =>
    isPropPresent(props, media, 'flex', 'inlineFlex')
      ? isPropPresent(props, media, 'column', 'col')
        ? 'align-items: flex-start;'
        : 'justify-content: flex-start;'
      : 'text-align: left;',
  innerRight: (props, media) =>
    isPropPresent(props, media, 'flex', 'inlineFlex')
      ? isPropPresent(props, media, 'column', 'col')
        ? 'align-items: flex-end;'
        : 'justify-content: flex-end;'
      : 'text-align: right;',
  innerTop: (props, media) => {
    return isPropPresent(props, media, 'flex', 'inlineFlex')
      ? isPropPresent(props, media, 'column', 'col')
        ? 'justify-content: flex-start;'
        : 'align-items: flex-start;'
      : '';
  },
  innerBottom: (props, media) =>
    isPropPresent(props, media, 'flex', 'inlineFlex')
      ? isPropPresent(props, media, 'column', 'col')
        ? 'justify-content: flex-end;'
        : 'align-items: flex-end;'
      : '',
  outerCenter: `
    margin-left: auto;
    margin-right: auto;
  `,
  grow: {
    css: 'flex-grow',
    format: Number,
  },
  shrink: {
    css: 'flex-shrink',
  },
  'colReverse|columnReverse': {
    css: 'flex-direction: column-reverse;',
  },
  reverse: {
    css: 'flex-direction: row-reverse;',
  },

  // dimensions
  'width|w': {
    css: 'width',
    format: pixelate,
  },
  'minWidth|minW': {
    css: 'min-width',
    format: pixelate,
  },
  'maxWidth|maxW': {
    css: (props, media) => `
      width: 100%;
      max-width: ${pixelate(getPropValue(props, media, 'maxWidth', 'maxW'))};
    `,
  },
  'height|h': {
    css: 'height',
    format: pixelate,
  },
  'minHeight|minH': {
    css: 'min-height',
    format: pixelate,
  },
  'maxHeight|maxH': {
    css: (props, media) => `
      height: 100%;
      max-height: ${pixelate(getPropValue(props, media, 'maxHeight', 'maxH'))};
    `,
  },
  'lineHeight|lineH|lh': {
    css: 'line-height',
    format: pixelate,
  },
  pointer: 'cursor: pointer;',

  // position
  relative: 'position: relative',
  absolute: 'position: absolute',
  fixed: 'position: fixed',
  static: 'position: static',
  cover: `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  `,
  'zIndex|z': {
    css: 'z-index',
    withTheme: true,
  },
  top: {
    css: 'top',
    format: pixelate,
  },
  right: {
    css: 'right',
    format: pixelate,
  },
  bottom: {
    css: 'bottom',
    format: pixelate,
  },
  left: {
    css: 'left',
    format: pixelate,
  },

  'padding|p': {
    css: 'padding',
    format: spacing,
  },
  'paddingTop|pt': {
    css: 'padding-top',
    format: spacing,
  },
  'paddingRight|pr': {
    css: 'padding-right',
    format: spacing,
  },
  'paddingBottom|pb': {
    css: 'padding-bottom',
    format: spacing,
  },
  'paddingLeft|pl': {
    css: 'padding-left',
    format: spacing,
  },
  'paddingX|px': {
    css: (props, media) => `
      padding-left: ${spacing(
        getPropValue(props, media, 'paddingX', 'px'),
        props.theme,
      )};
      padding-right: ${spacing(
        getPropValue(props, media, 'paddingX', 'px'),
        props.theme,
      )};
    `,
  },
  'paddingY|py': {
    css: (props, media) => `
      padding-top: ${spacing(
        getPropValue(props, media, 'paddingY', 'py'),
        props.theme,
      )};
      padding-bottom: ${spacing(
        getPropValue(props, media, 'paddingY', 'py'),
        props.theme,
      )};
    `,
  },
  'margin|m': {
    css: 'margin',
    format: spacing,
  },
  'marginTop|mt': {
    css: 'margin-top',
    format: spacing,
  },
  'marginRight|mr': {
    css: 'margin-right',
    format: spacing,
  },
  'marginBottom|mb': {
    css: 'margin-bottom',
    format: spacing,
  },
  'marginLeft|ml': {
    css: 'margin-left',
    format: spacing,
  },
  'marginX|mx': {
    css: (props, media) => `
      margin-left: ${spacing(
        getPropValue(props, media, 'marginX', 'mx'),
        props.theme,
      )};
      margin-right: ${spacing(
        getPropValue(props, media, 'marginX', 'mx'),
        props.theme,
      )};
    `,
  },
  'marginY|my': {
    css: (props, media) => `
      margin-top: ${spacing(
        getPropValue(props, media, 'marginY', 'my'),
        props.theme,
      )};
      margin-bottom: ${spacing(
        getPropValue(props, media, 'marginY', 'my'),
        props.theme,
      )};
    `,
  },

  // style
  'background|bg': {
    css: 'background',
    withTheme: true,
  },
  'borderRadius|radius': {
    css: (props, media) => {
      const radius = getPropValue(props, media, 'borderRadius', 'radius');
      if (Array.isArray(radius)) {
        return `
          border-top-left-radius: ${pixelate(radius[0])};
          border-top-right-radius: ${pixelate(radius[1])};
          border-bottom-right-radius: ${pixelate(radius[2])};
          border-bottom-left-radius: ${pixelate(radius[3])};
        `;
      }
      return `border-radius: ${pixelate(radius)}`;
    },
  },
  borderTopLeftRadius: {
    css: 'border-top-left-radius',
    format: pixelate,
  },
  borderTopRightRadius: {
    css: 'border-top-right-radius',
    format: pixelate,
  },
  borderBottomRightRadius: {
    css: 'border-bottom-right-radius',
    format: pixelate,
  },
  borderBottomLeftRadius: {
    css: 'border-bottom-left-radius',
    format: pixelate,
  },
  borderColor: {
    css: 'border-color',
    withTheme: true,
  },
  borderImage: {
    css: 'border-image',
    withTheme: true,
  },
  ...[
    ['border', 'border'],
    ['borderTop', 'border-top'],
    ['borderRight', 'border-right'],
    ['borderBottom', 'border-bottom'],
    ['borderLeft', 'border-left'],
  ].reduce(
    (rules, [jsKey, cssKey]) => ({
      ...rules,
      [jsKey]: {
        css: (props, media, extensions) => {
          const propValue = getPropValue(
            props,
            media,
            extensions?.length ? [jsKey, ...extensions].join('$') : jsKey,
          );

          // withTheme
          const value =
            typeof propValue === 'function'
              ? propValue(props.theme)
              : propValue;

          if (!/^\d/.test(value)) {
            return `${cssKey}: 1px solid ${value}`;
          }
          return `${cssKey}: ${value}`;
        },
      },
    }),
    {},
  ),
  transition: (props, media) => {
    const value = getPropValue(props, media, 'transition');
    return typeof value === 'string'
      ? `transition: ${value}`
      : 'transition: all .2s';
  },
  'boxShadow|shadow': {
    css: 'box-shadow',
    withTheme: true,
  },
  textShadow: {
    css: 'text-shadow',
    withTheme: true,
  },
  color: {
    css: 'color',
    withTheme: true,
  },
  fill: {
    css: 'fill',
    withTheme: true,
  },
  fontSize: {
    css: 'font-size',
    format: pixelate,
  },
  outline: {
    css: 'outline',
    withTheme: true,
  },
};

import styled from 'styled-components';
import { colorMixin, sizeFormatter } from './utils';

import { divMixin, renderCss } from './Div';

const textRules = {
  weight: 'font-weight',
  size: {
    css: 'font-size',
    format: sizeFormatter,
  },
  color: {
    css: (props, media, extensions) => {
      const color = extensions.includes('hover')
        ? props.$color$hover
        : props.$color;
      console.log('TCL: color', color);

      return colorMixin(color, props.theme);
    },
  },
  tnum: 'font-feature-settings: "tnum";letter-spacing:-0.04em;',
  breakWord: 'word-break: break-word;',
  noBreak: 'white-space: nowrap;',
  uppercase: 'text-transform: uppercase;',
  serif: 'font-family: "Times New Roman", Times, serif',
  'spacing|letterSpacing': `letter-spacing`,
  left: 'text-align: left;',
  right: 'text-align: right;',
  center: 'text-align: center;',
  lineThrough: 'text-decoration: line-through',
  // underline: 'text-decoration: underline;',
  linearGradient: props => `
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    background-image: linear-gradient(${
      typeof props.$linearGradient === 'function'
        ? props.$linearGradient(props.theme)
        : props.$linearGradient
    });
  `,
  ellipsis: `
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  `,
  underline: 'text-decoration: underline;',
};

const Text = styled.p`
  ${props => divMixin(props)}
  ${props => {
    console.log('TCL: props', props);
    console.log('TCL: render', renderCss(props, textRules, 'text'));
    return renderCss(props, textRules, 'text');
  }}
`;

export default Text;

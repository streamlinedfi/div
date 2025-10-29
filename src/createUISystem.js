import { upperFirst } from './utils';

const { keys, entries, fromEntries } = Object;

const getDefaultWidth = () => {
  return typeof window !== 'undefined' && typeof document !== 'undefined'
    ? document.body.clientWidth
    : 0;
};

const createBreakpoints = breakpoints => {
  return {
    getCssMedia: ({ min, max }) => {
      if (min && max) {
        return `@media (min-width: ${min}px) and (max-width: ${max}px)`;
      }

      if (min) {
        return `@media (min-width: ${min}px)`;
      }

      return `@media (max-width: ${max}px)`;
    },
    keys: keys(breakpoints),
    ...fromEntries(
      entries(breakpoints).map(([key, { min, max }]) => {
        return [upperFirst(key), { min, max }];
      }),
    ),
    ...fromEntries(
      entries(breakpoints).map(([key, { min = 0, max = Infinity }]) => {
        return [
          `is${upperFirst(key)}`,
          (width = getDefaultWidth()) =>
            width !== 0 && width >= min && width <= max,
        ];
      }),
    ),
  };
};

const createSpacing = spacingUnit => (multiplier, adjuster = 0, usePx = true) =>
  (multiplier || 1) * spacingUnit + adjuster + (usePx ? 'px' : 0);

function createUISystem({ theme, breakpoints, spacingUnit }) {
  const Breakpoints = createBreakpoints(breakpoints);

  return {
    theme: {
      ...theme,
      Breakpoints,
      spacing: createSpacing(spacingUnit),
    },
    Breakpoints,
  };
}

export default createUISystem;

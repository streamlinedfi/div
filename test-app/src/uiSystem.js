import { createUISystem } from '@streamlinedfi/div';

export const uiSystem = createUISystem({
  theme: {
    red: 'red',
    blue: 'blue',
    green: 'green',
  },
  breakpoints: {
    mobile: { max: 768 },
    tablet: { min: 769, max: 1023 },
    desktop: { min: 1024 },
  },
  spacingUnit: 16,
});

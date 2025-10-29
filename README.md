# Build UI with Speed

Streamlined Div is a styled-components extension of the html div for building products with speed

## Installation

```
# with Yarn
$ yarn add @streamlinedfi/div styled-components

# with npm
$ npm i @streamlinedfi/div styled-components

# with pnpm
$ pnpm add @streamlinedfi/div styled-components

# with Bun
$ bun add @streamlinedfi/div styled-components
```

## Usage

### 1. Create a UI System

```jsx
import { createUISystem } from '@streamlinedfi/div';

export const uiSystem = createUISystem({
  theme: {
    background: 'darkblue',
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
```

### 2. Wrap app with uiSystem.theme

```jsx
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App.jsx';
import { uiSystem } from './uiSystem';

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={uiSystem.theme}>
    <App />
  </ThemeProvider>,
);
```

### 3. Use @streamlinedfi/div

```jsx
import Div from '@streamlinedfi/div';

function App() {
  return (
    <Div
      as="main"
      $flex
      $innerCenter
      $grow
      $p={2.5}
      $background={theme => theme.background}
    >
      <Div $w={100} $h={100} />
      <Div $w={100} $h={100} />
    </Div>
  );
}

export default App;
```

## Shorthand props

It inherits most of css rules:

| CSS Property     | Shorthand Prop    |
| ---------------- | ----------------- |
| max-width        | \$maxWidth        |
| background-color | \$backgroundColor |
| text-decoration  | \$textDecoration  |

But also has some shorthands ([see the full list in `src/rules.js`](./src/rules.js)):

| CSS Property  | Shorthand Prop |
| ------------- | -------------- |
| width         | \$w            |
| height        | \$h            |
| padding       | \$p            |
| padding-top   | \$pt           |
| ...           | ...            |
| margin        | \$mt           |
| margin-bottom | \$mb           |
| ...           | ...            |

And some props are new extensions (handy for flex):

| New Shorthand Prop |
| ------------------ |
| \$innerCenter      |
| \$outerCenter      |
| \$innerTop         |
| \$innerLeft        |
| ...                |

And some props use the spacing system based on the provided spacingUnit.

```jsx
const uiSystem = createUISystem({
  // ...
  spacingUnit: 16,
});

/**
 * with spacingUnit: 16, the div will have:
 * padding-left: 32px
 * margin-bottom: 16px;
 */
<Div $pl={2} $mb={1}>
```

Lastly, the div accepts media props:

```jsx
<Div $w={300} $mobile$w={100} $tablet$w={200}>
```

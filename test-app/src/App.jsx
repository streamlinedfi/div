import Div from '@streamlinedfi/div';
import styled from 'styled-components';
import { uiSystem } from './uiSystem.js';

const { Breakpoints } = uiSystem;

const Container = styled.div`
  height: 100px;

  ${Breakpoints.getCssMedia(Breakpoints.Mobile)} {
    width: 100px;
    background: ${props => props.theme.red};
  }

  ${Breakpoints.getCssMedia(Breakpoints.Tablet)} {
    width: 200px;
    background: ${props => props.theme.blue};
  }

  ${Breakpoints.getCssMedia(Breakpoints.Desktop)} {
    width: 300px;
    background: ${props => props.theme.green};
  }
`;

function App() {
  return (
    <>
      <Div
        $background={theme => theme.red}
        $mobile$w={100}
        $tablet$w={200}
        $desktop$w={300}
        $mb={1}
        $h={100}
      />
      <Div
        $background={theme => theme.blue}
        $mobile$w={100}
        $tablet$w={200}
        $desktop$w={300}
        $mb={1}
        $h={100}
      />
      <Div
        $background={theme => theme.green}
        $mobile$w={100}
        $tablet$w={200}
        $desktop$w={300}
        $mb={1}
        $h={100}
      />
      <Container />
    </>
  );
}

export default App;

import { Div, Text } from '@streamlinedfi/div';
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
      <Text $size={13} $color={400} $mb={0.5}>
        Hello
      </Text>
      <Text $size={16} $color={500} $mb={0.5}>
        Bonjour
      </Text>
      <Text $size={19} $color={600} $mb={1}>
        Salut
      </Text>
      <Div
        $background={theme => theme.red}
        $mobile$w={100}
        $tablet$w={200}
        $desktop$w={300}
        $mb={1}
        $h={100}
        $px={1}
        $py={1}
        $mx={1}
      >
        <Div $w={100} $h={100} $background={theme => theme.blue} />
      </Div>
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

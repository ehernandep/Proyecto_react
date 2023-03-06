import styled, { keyframes } from "styled-components";

// Keyframe animation for the loading spinner
const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

// Wrapper for the loading mask
const LoadingWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

// Container for the spinner
const SpinnerContainer = styled.div`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
`;

// The actual spinner element
const Spinner = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 51px;
  height: 51px;
  margin: 6px;
  border: 6px solid #fff;
  border-radius: 50%;
  animation: ${spin} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
`;

const LoadingMask = () => {
  return (
    <LoadingWrapper>
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    </LoadingWrapper>
  );
};

export default LoadingMask;

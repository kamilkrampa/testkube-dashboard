import styled from 'styled-components';
import {Collapse} from 'antd';

export const StyledTestStatusImage = styled.div`
  position: relative;
  top: 70px;
  left: var(--space-lg2);
`;

export const StyledTestOutputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin-right: var(--space-lg);
  margin-left: var(--space-md);
  position: relative;
  top: 60px;
  left: var(--space-lg2);
`;

export const StyledTestOutputDescription = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;

  &:nth-child(1) {
    margin-right: var(--space-md);
  }
`;

export const StyledPlainTextOutputContainer = styled.div`
  width: 96%;
  max-height: 65vh;
  overflow: scroll;
  background-color: black;
  background-image: radial-gradient(rgba(0, 32, 150, 0.75), black 120%);

  @media screen and (min-width: 2500px) {
    width: 98%;
  }
`;

export const StyledTestOutput = styled.span`
  white-space: pre-line;
  color: white;
  text-shadow: 0 0 5px #c8c8c8;

  &::selection {
    background: #0080ff;
    text-shadow: none;
  }
`;

export const StyledText = styled.pre`
  display: flex;
`;

export const StyledTestStepsOutPutContainer = styled.div`
  width: 100%;
  max-height: 65vh;
  overflow: scroll;

  @media screen and (min-width: 2500px) {
    width: 98%;
  }
`;

export const StyledTestStepNameContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 49px;
  background: var(--color-gray-dark);
  margin-bottom: 1px;
  color: var(--color-light-primary);
  cursor: pointer;
`;

export const StyledTestStepName = styled.span`
  margin-left: 15px;
  font-size: var(--font-size-md);
`;

export const StyledTestAssertionResultsContainer = styled.div`
  display: flex;
  color: var(--color-light-primary);
  margin-bottom: var(--font-size-3sm);
`;

export const StyledTestStepAssertionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--font-size-sm);
  margin-left: var(--space-md);
`;

export const StyledTestOutputNameAndStatus = styled.div`
  display: flex;
`;

export const StyledTestOutputAssertionName = styled.span`
  margin-left: var(--space-xxs);
  font-size: var(--font-size-sm);
  color: var(--color-light-primary);
`;

export const StyledTestOutputAssertionErrorMessage = styled.span`
  font-size: var(--font-size-sm);
  color: var(--color-light-primary);
`;

export const StyledCollapse = styled(Collapse.Panel)`
  &&& {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    border: none;
    height: 100%;
  }

  background: var(--color-gray-dark);
`;

export const StyledTestWithoutAssertions = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--space-x1l);
  background: var(--color-gray-dark);
  margin-top: 5px;
  margin-bottom: var(--space-xxs);
  color: var(--color-light-primary);
  cursor: pointer;
  padding-left: var(--space-md);
`;

export const TestsWithoutStepsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-md);
  height: var(--space-x1l);
  background: #ff4d4fb3;
  color: var(--color-light-primary);
  width: 100%;

  @media screen and (min-width: 2560px) {
    width: 95%;
  }
`;

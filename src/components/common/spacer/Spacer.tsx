import React from 'react';
import styled from 'styled-components/native';

type Props = {
  width?: number;
  height?: number;
};

const Spacer: React.FC<Props> = ({width, height}) => {
  return <Wrapper width={width} height={height} />;
};
export default Spacer;

const Wrapper = styled.View<{width?: number; height?: number}>`
  width: ${({width}) => width}px;
  height: ${({height}) => height}px;
`;

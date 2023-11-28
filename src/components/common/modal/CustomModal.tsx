import React from 'react';
import styled from 'styled-components/native';
import Modal from 'react-native-modal';
import {colors} from 'constants/colors';

type Props = {
  children: React.ReactNode;
  isVisible?: boolean;
};

const CustomModal: React.FC<Props> = ({isVisible, children, ...rest}) => {
  return (
    <ModalWrapper>
      <Modal isVisible={isVisible} {...rest}>
        <ModalContainer>{children}</ModalContainer>
      </Modal>
    </ModalWrapper>
  );
};

export default CustomModal;

const ModalWrapper = styled.View`
  flex: 1;
`;
const ModalContainer = styled.View`
  min-height: 480px;
  background-color: ${colors.white};
  border-radius: 16px;
`;

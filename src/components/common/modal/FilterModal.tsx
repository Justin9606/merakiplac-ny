import React from 'react';
import Modal from 'react-native-modal';
import styled from 'styled-components/native';
import {colors} from 'constants/colors';
import {PrimaryButton, Spacer, TextInput} from 'components/common';

type Props = {
  isVisible?: boolean;
  onApplyFilter: () => void;
};

const FilterModal: React.FC<Props> = ({isVisible, onApplyFilter}) => {
  return (
    <ModalWrapper>
      <Modal isVisible={isVisible}>
        <ModalContainer>
          <Spacer height={20} />
          <TextInput
            label={'헤드라인'}
            placeholder="검색하실 헤드라인을 입력해주세요."
          />
          <TextInput
            label={'헤드라인'}
            placeholder="검색하실 헤드라인을 입력해주세요."
            rightItemType={'calendar'}
          />

          <AbsoluteButton>
            <PrimaryButton text={'필터 적용하기'} onPress={onApplyFilter} />
          </AbsoluteButton>
        </ModalContainer>
      </Modal>
    </ModalWrapper>
  );
};

export default FilterModal;

const ModalWrapper = styled.View`
  flex: 1;
`;
const ModalContainer = styled.View`
  min-height: 480px;
  background-color: ${colors.white};
  border-radius: 16px;
`;

const AbsoluteButton = styled.View`
  position: absolute;
  bottom: 20px;
  right: 0px;
  left: 0px;
`;

import React, {useState} from 'react';
import styled from 'styled-components/native';
import {
  DatePicker,
  Modal,
  PrimaryButton,
  Spacer,
  TextInput,
} from 'components/common';
import {TextInputProps} from '../input/TextInput';

import {formatDateWithDay} from 'utils/utility';

type Props = {
  isVisible?: boolean;
  onApplyFilter: any;
} & TextInputProps;

const FilterModal: React.FC<Props> = ({isVisible, onApplyFilter}) => {
  const [localHeadlineFilter, setLocalHeadlineFilter] = useState('');
  const [localDateFilter, setLocalDateFiler] = useState('');
  const [localCountryFilter, setLocalCountryFilter] = useState('');
  const [showDatePickerModal, setShowDatePickerModal] = useState(false);

  const _onHandleFilter = () => {
    onApplyFilter(localHeadlineFilter);
  };

  return (
    <>
      <Modal isVisible={isVisible}>
        <Spacer height={20} />
        <TextInput
          label={'헤드라인'}
          placeholder="검색하실 헤드라인을 입력해주세요."
          onChangeText={setLocalHeadlineFilter}
          value={localHeadlineFilter}
        />
        <TextInput
          label={'날짜'}
          placeholder="날짜를 선택해주세요. ex:(2023.12.12)"
          rightItemType={'calendar'}
          onChangeText={setLocalDateFiler}
          value={localDateFilter}
          onPressDatePicker={() => setShowDatePickerModal(true)}
        />

        <AbsoluteButton>
          <PrimaryButton text={'필터 적용하기'} onPress={_onHandleFilter} />
        </AbsoluteButton>
      </Modal>
      <DatePicker
        date={new Date()}
        mode="date"
        modal
        open={showDatePickerModal}
        onConfirm={date => {
          const formattedDate = formatDateWithDay(date, true);
          setLocalDateFiler(formattedDate);
          setShowDatePickerModal(false);
        }}
        onCancel={() => setShowDatePickerModal(false)}
      />
    </>
  );
};

export default FilterModal;

const AbsoluteButton = styled.View`
  position: absolute;
  bottom: 20px;
  right: 0px;
  left: 0px;
`;

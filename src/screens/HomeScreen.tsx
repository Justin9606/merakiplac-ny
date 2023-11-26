import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {FilterModal} from 'components/common';
import {CustomHeader} from 'components/header';

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <CustomHeader
        headerType="custom"
        onPressHeaderFilter={() => setModalVisible(true)}
      />

      <FilterModal
        isVisible={modalVisible}
        onApplyFilter={() => setModalVisible(false)}
      />

      <ScrollView></ScrollView>
    </>
  );
};

export default HomeScreen;

import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useRecoilState} from 'recoil';
import styled from 'styled-components/native';
//components
import {File} from 'assets';
import {scrapListAtom} from 'atoms/scrapListAtom';
import {FilterModal, NewsList, PrimaryButton} from 'components/common';
import CustomImage from 'components/common/CustomImage';
import {colors} from 'constants/colors';
import {formatDateWithDay} from 'utils/utility';
import {CustomHeader} from 'components/header';
import {toggleScrap} from 'utils/scrapUtils';

const ScrapScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [scrapList, setScrapList] = useRecoilState(scrapListAtom);

  const handleToggleScrap = (newsItems: NewsType) => {
    toggleScrap(setScrapList, newsItems);
  };

  return scrapList?.length > 0 ? (
    <>
      <CustomHeader
        headerType="custom"
        onPressHeaderFilter={() => setModalVisible(true)}
      />

      <FlatList
        ListHeaderComponent={
          <FilterModal
            isVisible={modalVisible}
            onApplyFilter={() => {
              setModalVisible(false);
            }}
          />
        }
        data={scrapList}
        renderItem={({item, index}) => {
          const isScrapped = scrapList.includes(item);
          return (
            <NewsList
              _id={item._id}
              key={index + item._id}
              index={index}
              onPress={() =>
                navigation.navigate('WebViewScreen', {
                  WebViewUrl: item.web_url,
                  title: item.headline.main,
                  originWhitelist: ['*'],
                })
              }
              onPressScrapBtn={() => handleToggleScrap(item)}
              headLine={item?.headline.main}
              isScrapped={isScrapped}
              newsDate={formatDateWithDay(item.pub_date)}
              reportedSource={item.source}
              reportedBy={item?.byline.original}
            />
          );
        }}
      />
    </>
  ) : (
    <ViewWrapper>
      <CustomImage image={File} style={{alignSelf: 'center'}} />
      <Text>저장된 스크랩이 없습니다.</Text>
      <PrimaryButton
        text="스크랩 하러 가기"
        paddingHorizontal={40}
        onPress={() => navigation.navigate('Home' as never)}
      />
    </ViewWrapper>
  );
};

export default ScrapScreen;

const ViewWrapper = styled.View`
  flex: 1;
  justify-content: center;
`;
const Text = styled.Text`
  margin-top: 8px;
  margin-bottom: 20px;
  text-align: center;
  color: ${colors.black_80};
  font-family: Apple SD Gothic Neo;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
`;
